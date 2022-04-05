import { useEffect, useState } from 'react';
import { db } from '../firebase';
import {
	onSnapshot,
	doc,
	setDoc,
	getDoc,
	collection,
	query,
	where,
	getDocs,
	WhereFilterOp,
	runTransaction,
	deleteDoc,
	QueryConstraint,
	limit,
    orderBy
} from 'firebase/firestore';

export async function FirestoreRead<DataType>(collection: string, document: string) {
	try {
		const docRef = doc(db, collection, document);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data() as DataType;
		} else {
			console.error('No such document!');
			return undefined;
		}
	} catch (error) {
		console.error('Error getting document:', error);
		throw new Error(error);
	}
}

export function FirestoreWrite<DataType>() {
	const createDoc = async (collection: string, document: string, data: DataType) => {
		await setDoc(doc(db, collection, document), data);
	};

	const mergeDoc = async (collection: string, document: string, data: DataType) => {
		await setDoc(doc(db, collection, document), data, { merge: true });
	};

	const deleteDocument = async (collection: string, document: string) => {
		await deleteDoc(doc(db, collection, document));
	};

	const updateDoc = async (collection: string, document: string, data: DataType) => {
		try {
			const ref = doc(db, collection, document);
			await runTransaction(db, async (transaction) => {
				const sfDoc = await transaction.get(ref);
				if (!sfDoc.exists()) {
					throw 'Document does not exist!';
				}
				transaction.update(ref, data);
			});
		} catch (e) {
			console.error('Transaction failed: ', e);
			throw new Error('Transaction failed: ' + e);
		}
	};

	return { createDoc, mergeDoc, updateDoc, deleteDocument };
}

export function useFirestoreRead<DataType>(collection: string, document: string) {
	const [ data, setData ] = useState<DataType>();

	const readDoc = (collection: string, document: string) => {
		return onSnapshot(doc(db, collection, document), (doc) => {
			setData(doc.data() as DataType | undefined);
		});
	};

	useEffect(
		() => {
			const unsub = readDoc(collection, document);
			return () => unsub();
		},
		[ document ]
	);

	return { data };
}

export function useFirestoreReadMultiple<DataType>(
	collectionName: string,
	firstQuery: string,
	condition: WhereFilterOp,
	secondQuery: any,
	limitNumber?: number,
    order?: {
        field: string,
        direction: 'asc' | 'desc'
    }
) {
	const [ data, setData ] = useState<DataType[]>();

	const read = (collectionName: string, firstQuery: string, secondQuery: any, condition: WhereFilterOp) => {
		const value: QueryConstraint[] = [];
		value.push(where(firstQuery, condition, secondQuery));
        if(order) {
            value.push(orderBy(order.field, order.direction));
        }
		if (limitNumber) {
			value.push(limit(limitNumber));
		}
		const q = query(collection(db, collectionName), ...value);
		return onSnapshot(q, (querySnapshot) => {
			const data: DataType[] = [];
			querySnapshot.forEach((doc) => {
				data.push(doc.data() as DataType);
			});
			setData(data);
		});
	};

	useEffect(() => {
		const unsub = read(collectionName, firstQuery, secondQuery, condition);
		return () => unsub();
	}, []);

	return { data };
}

export function useFirestoreSearchField<DataType>() {
	const [ isLoading, setLoading ] = useState(false);

	const search = async (collectionName: string, field: string, searching: string) => {
		setLoading(true);
		const ref = collection(db, collectionName);
		const q = query(ref, where(field, '==', searching));
		const docSnap = await getDocs(q);
		setLoading(false);
		if (docSnap.docs.length > 0) {
			return docSnap.docs.map((e) => e.data()) as DataType[];
		} else {
			console.error('No such user!');
			return undefined;
		}
	};

	return { search, isLoading };
}

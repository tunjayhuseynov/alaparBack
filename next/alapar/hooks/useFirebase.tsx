import { FirestoreRead, FirestoreWrite, useFirestoreReadMultiple } from "../firebase/tools"

type Collection = "animal" | "bina" | 'auto' | 'electro' | 'home' | 'private' | 'job' | 'service' | 'child' | 'hobby'
type dbCollection = 'dbAnimal' | 'dbBina' | 'dbAuto' | 'dbElectro' | 'dbHome' | 'dbPrivate' | 'dbJob' | 'dbService' | 'dbChild' | 'dbHobby'
type commonCollection = "cities"
type AllCollection = commonCollection | dbCollection | Collection

export default function useListen<State>(collection: Collection) {
    const { data } = useFirestoreReadMultiple<State>(collection, "id", "!=", "0", 50, {
        direction: "desc",
        field: 'timestamp',
    })

    return { data }
}

export function useQuery(collection?: AllCollection) {
    const getDoc = async <State extends {}>(document: string, customCollection: AllCollection) => {
        return await FirestoreRead<State>((collection ?? customCollection), document)
    }

    const writeDoc = async <State extends {}>(document: string, state: State) => {
        await FirestoreWrite<State>().createDoc(collection, document, state)
    }

    return { getDoc, writeDoc }
}



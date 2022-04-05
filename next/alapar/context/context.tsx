import { createContext, Dispatch, SetStateAction, useContext, useEffect, useMemo, useState } from "react";
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { labelNames } from "@/controller";
import useListen from 'hooks/useFirebase'
import { AnimalState } from 'hooks/Types/animal'

export enum UserStatus {
    Waiting = "Waiting",
    Active = "Active",
    Blocked = "Blocked",
    UnderAttack = "UnderAttack"
}

interface IUser {
    id: string,
    name: string,
    email: string,
    verified: UserStatus,
}

interface IState {
    user: IUser,
    maincolor: string,
    isBusiness: boolean,
    auth: boolean,
    pagename: string,
}


export type State = [IState, Dispatch<SetStateAction<IState>>]

export const AppContext = createContext<State>(undefined);

export default function AppWrapper({ children }) {
    const router = useRouter();

    const [appState, setAppState] = useState<IState>(
        {
            user: Cookies.get("user") as IUser,
            maincolor: labelNames[(router.query?.pagename as string)]?.mainColor || '#000000',
            isBusiness: !!Cookies.get("business_user"),
            auth: !!Cookies.get("access_token"),
            pagename: router.query?.pagename as string || '',
        }
    );

    useEffect(() => {
        setAppState({
            user: Cookies.get("user") as IUser,
            maincolor: labelNames[router.query?.pagename]?.mainColor || '#000000',
            isBusiness: !!Cookies.get("business_user"),
            auth: !!Cookies.get("access_token"),
            pagename: router.query?.pagename as string || '',
        });
    }, [router])

    const contextValue: State = useMemo(() => {
        return [appState, setAppState];
    }, [appState, setAppState]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext(): State {
    return useContext(AppContext);
}
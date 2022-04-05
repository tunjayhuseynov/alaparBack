import { useAppContext } from 'context/context';
import Link from 'next/link'

const BusinessDetail = () => {
    const [appState] = useAppContext()
    return <>
        <section className="h-full bg-indigo-200 flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold">{!appState.auth ? 'Biznes Hesab Yaradın' : 'Biznes Hesaba Keçin'}</h1>
            <Link href={appState.auth ? "/profile/business/create" : "/login?callback=business"}>
                <a className="py-2 px-4 bg-pink font-semibold">
                    {!appState.auth ? 'Yarat' : 'Keç'}
                </a>
            </Link>
        </section>
    </>
}

export default BusinessDetail;
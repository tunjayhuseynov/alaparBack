import UserSdk from "@/userSDK";
import { message } from 'antd';
import Link from 'next/link'
import { useAppContext, UserStatus } from "context/context";

export function GetLayout({ children }) {

    const [appState] = useAppContext()

    return (
        appState.user.verified !== UserStatus.Waiting ? <div className="flex w-full min-h-full" style={{ backgroundColor: "var(--bg-color)" }}>
            <section id={'sidebar'} className="w-[15%] bg-[#5e5e5e] min-h-full pt-[75px]">
                <ul className="text-[#5e5e5e] font-semibold">
                    <Link href="/profile">
                        <li className="mb-5 py-3 px-2 text-center hover:bg-gray-200 cursor-pointer" style={{ backgroundColor: "var(--bg-color)" }}>Hesab Məzmunu</li>
                    </Link>
                    <Link href="/profile/wallet">
                        <li className="mb-5 py-3 px-2 text-center hover:bg-gray-200 cursor-pointer" style={{ backgroundColor: "var(--bg-color)" }}>Pul Kisəsi</li>
                    </Link>
                    <Link href={appState.isBusiness ? '/profile/business' : "/profile/business/create"}>
                        <li className="mb-5 py-3 px-2 text-center hover:bg-gray-200 cursor-pointer" style={{ backgroundColor: "var(--bg-color)" }}>{appState.isBusiness ? 'Biznes' : 'Biznes Hesaba Keç'}</li>
                    </Link>
                </ul>
            </section>
            <section id="main" className="min-w-[85%] min-h-full flex-grow-1 flex flex-col">
                <div className="h-[0%] pt-[75px] w-full bg-[#5e5e5e]"></div>
                <div className="mt-3">
                    {children}
                </div>
            </section>
        </div> :
            <div className="w-full h-full bg-gray-300 flex gap-5 justify-center flex-col items-center">
                <span className="font-semibold text-3xl">Hesab Aktiv Deyil. Mail`ə Gəlmiş Linklə Aktiv Edilməlidir</span>
                <button onClick={() => {
                    UserSdk().sendVerificationMail().then(w => {
                        if (w.ok) return message.success("Email Göndərildi!")

                    }).catch(w => message.error("Mail Göndərilərkən Problem Yaşandı"))
                }} className="px-5 py-2 text-white font-medium bg-green-500">Linki Yenidən Göndər</button>
            </div>
    )
}
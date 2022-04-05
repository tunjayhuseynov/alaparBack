import UserSdk from "@/userSDK";
import React, { ReactElement, useEffect, useState } from "react"
import Link from "next/link";
import Utilities from "@/utilities";

export default function Wallet() {
    const [balance, setBalance] = useState("Yüklənir...");
 
    useEffect(() => {
        UserSdk().getWalletAmount().then((amount: any) => {
            setBalance(amount)
        }).catch(() => {
            new Utilities().showError("Xəta Baş Verdi")
        })

    }, [])

    return (
        <div className="w-[85%] mx-auto flex flex-col gap-3">
            <div className='flex justify-between'>
                <span className="font-semibold text-xl">Balans:</span>
                <span className="font-semibold text-xl">{balance}</span>
            </div>
            <div className="flex justify-end">
                <Link href="/profile/wallet/increase"><button className="px-2 py-3 font-semibold rounded text-white bg-green-500">Balansı Artır</button></Link>
            </div>
        </div>
    )
}

Wallet.getProfileLayout = true

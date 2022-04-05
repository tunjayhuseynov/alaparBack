import UserSdk from "@/userSDK";
import { useEffect, useState } from "react"
import {
    Form,
    Button,
    InputNumber,
} from 'antd';
import router from "next/router";
import Utilities from "@/utilities";

export default function Increase() {
    const [balance, setBalance] = useState(0.5);

    const process = () => {
        if(balance > 0 && balance < 1000) {
            UserSdk().increaseWalletAmount(balance).then((amount)=>{
                router.push("/profile/wallet")
            }).catch(()=>{
                new Utilities().showError("Xəta Baş Verdi")
            })
        }
    }

    return (
        <div className="w-[85%] mx-auto flex flex-col gap-3 mt-5">
            <div className='flex flex-col gap-3'>
                <Form.Item
                    label="Miqdar"
                    name="username"
                    rules={[{ required: true, min: 0.5, max: 1000, type: "float" }]}
                >
                    <InputNumber min={0.5} max={1000} defaultValue={balance} onChange={(e) => setBalance(e)} />
                </Form.Item>
                <span className='font-thin text-xs'>Min. 0.5 Azn - 1000 Azn</span>
                <span className='font-thin text-xs'>Kəsr hissə üçün nöqtə qoyun</span>
            </div>
            <div className="flex justify-end">
                <button onClick={() => process()} className="px-2 py-3 font-semibold rounded text-white bg-green-500">Ödəmə</button>
            </div>
        </div>
    )
}

Increase.getProfileLayout = true

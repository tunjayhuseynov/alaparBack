import UserSdk from '@/userSDK';
import { Popconfirm, message } from 'antd';


export default function Profile() {

    async function confirm(e) {

        try {
            await UserSdk().setLimitless();
            message.success('Yuppi! Limitsiz Hesaba Keçdiniz!');
        } catch (error) {
            if(error == 402){
                message.error('Balansda Kifayət Qədər Məbləğ Yoxdur')
            }else{
                message.error('Gözlənmədik Xəta Baş Verdi')
            }
        }
    }


    return (<div className="p-5">

        <Popconfirm
            title="10 Azn-a limitsiz hesaba keçməyi təsdiq edin."
            onConfirm={confirm}
            okText="Limitsiz Ol"
            cancelText="Ləvğ Et"
        >
            <button className={'px-4 py-2 font-semibold text-white bg-green-400'}>
                1 Ay Limitsiz Elan Yerləşdir - 10Azn
            </button>
        </Popconfirm>
    </div>)
}

Profile.getProfileLayout = true



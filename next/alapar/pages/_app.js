import '../styles/globals.css'
import '../styles/tailwind.css'
//import 'antd/dist/antd.less'
import 'antd/dist/antd.variable.min.css'
//import '../styles/variables.less'
import "react-image-gallery/styles/css/image-gallery.css"
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';

import { useRouter } from 'next/router'
import { useEffect, useState, createContext } from 'react'
import Layout from '@/Layouts/layout'
import NProgress from 'nprogress'
import Head from "next/head"
import { ConfigProvider } from 'antd';
import Cookies from 'js-cookie'
import { labelNames } from '@/controller'
import { GetLayout } from './profile/_layout';
import AppWrapper from 'context/context'

const signalR = require("@microsoft/signalr");

export const MainContext = createContext({});


function MyApp({ Component, pageProps }) {
  let [connection, setConnection] = useState(null);
  const router = useRouter();

  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: labelNames[router.query?.pagename]?.mainColor || '#000000',
      },
    });
  })

  const ConnectToSignalR = (token) => {
    if (connection == null) {
      const conn = new signalR.HubConnectionBuilder().withUrl("/socket/chat", { accessTokenFactory: () => token }).withAutomaticReconnect().build()
      setConnection(conn)
    }
  }

  useEffect(() => {
    ConnectToSignalR(Cookies.get("access_token"))
  }, [pageProps])

  useEffect(() => {

    let routeChangeStart = () => NProgress.start();
    let routeChangeComplete = () => NProgress.done();

    router.events.on("routeChangeStart", routeChangeStart);
    router.events.on("routeChangeComplete", routeChangeComplete);
    router.events.on("routeChangeError", routeChangeComplete);


    return () => {
      router.events.off("routeChangeStart", routeChangeStart);
      router.events.off("routeChangeComplete", routeChangeComplete);
      router.events.off("routeChangeError", routeChangeComplete);
    };
  }, []);


  return (
    /*<Provider store={store}>*/
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'} />
      </Head>
      <AppWrapper>
        {pageProps?.layout != false ?
          <Layout>
            {Component.getProfileLayout ?
              <GetLayout>
                <Component {...pageProps} />
              </GetLayout>
              :
              <Component {...pageProps} />
            }
          </Layout>
          :
          <Component {...pageProps} />
        }
      </AppWrapper>
    </>
    // </Provider>
  )
}



export default MyApp

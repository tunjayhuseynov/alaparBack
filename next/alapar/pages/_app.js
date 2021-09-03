import '../styles/globals.css'
import '../styles/tailwind.css'
import 'antd/dist/antd.less'
import '../styles/variables.less'
import "react-image-gallery/styles/css/image-gallery.css"
// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Layout from '@/Layouts/layout'
import { Provider } from 'react-redux'
import { createWrapper } from 'next-redux-wrapper'
import store from '../store/store'
import NProgress from 'nprogress'
import Head from "next/head"



function MyApp({ Component, pageProps }) {

  const router = useRouter();

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
    <Provider store={store}>
      <Head>
        <link rel="stylesheet" href={'https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'} />
      </Head>
      {pageProps?.layout != false ? <Layout>
        <Component {...pageProps} />
      </Layout> : <Component {...pageProps} />}


    </Provider>
  )
}

const makestore = () => store;
const wrapper = createWrapper(makestore)

export default wrapper.withRedux(MyApp);

import { AppProps } from "next/app";
import Layout from "../components/Layout";
import NextNProgress from 'nextjs-progressbar';
import '../styles/global.scss';

const MyApp = ({ Component, pageProps }:AppProps) => (
    <Layout>
        <NextNProgress color="#29D" stopDelayMs={200} height={4} showOnShallow={true} /> 
        <Component {...pageProps} />
    </Layout>
)

export default MyApp
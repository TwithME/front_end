// 가장 먼저 렌더링되는 페이지
import Layout from "@/components/commons/Layout/Layout";
import GlobalStyle from "@/styles/globals";
import Head from 'next/head';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }
  return (
    <RecoilRoot>
      <Head>
        <title>TwithME</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GlobalStyle />
      <Layout pathname={router.pathname}>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

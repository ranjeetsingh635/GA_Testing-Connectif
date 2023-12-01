import "src/Modules/AuthModule/Services/AuthService";

import { QueryClientProvider } from "react-query";
import { Fragment, useEffect, useState } from "react";
import { queryClient } from "src/Utils/ReactQueryConfig";
import { ToastContainer } from "react-toastify";
import { AppProps } from "next/app";
import { Theme } from "@radix-ui/themes";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import "@radix-ui/themes/styles.css";
import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  const [keyName, setKeyName] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      setKeyName((c: any) => !c);
    }
  }, [mounted]);
  return (
    <Fragment key={keyName ? 0 : 1}>
      <Theme>
        {mounted ? (
          <QueryClientProvider client={queryClient}>
            <Head>
              <title>Checking-CICD-Again</title>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <link rel="shortcut icon" href="/favicon.ico" />

              <meta name="google" content="notranslate"></meta>
            </Head>
            <Component {...pageProps} />
            <ToastContainer />
          </QueryClientProvider>
        ) : (
          <Fragment />
        )}
      </Theme>
    </Fragment>
  );
}

export default App;

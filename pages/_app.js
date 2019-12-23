import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { AnimatePresence, motion } from 'framer-motion';

export default class BlogApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    renderHead() {
        return (
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
                />
                <link 
                    rel="stylesheet" 
                    href="https://fonts.googleapis.com/icon?family=Material+Icons" 
                />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
            </Head>
        );
    }

    render() {
        const { Component, pageProps, router } = this.props;
        const spring = {
            type: "spring",
            damping: 20,
            stiffness: 100,
            when: "afterChildren"
        };
        return (
            <AnimatePresence exitBeforeEnter>
                <Container>
                    {this.renderHead()}
                    <CssBaseline />
                    <motion.div
                        transition={spring}
                        key={router.pathname}
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -300, opacity: 0 }}
                        id="page-transition-container"
                    >
                        <Component {...pageProps} key={router.route} />
                    </motion.div>
                    
                </Container>
            </AnimatePresence>
        );
    }
}

// import React from 'react'
// import NextApp from 'next/app'
// import React from 'react'
// import { ThemeProvider } from 'styled-components'

// const theme = {
//     primary: 'green',
// }


// class MyApp extends NextApp {
//     // Only uncomment this method if you have blocking data requirements for
//     // every single page in your application. This disables the ability to
//     // perform automatic static optimization, causing every page in your app to
//     // be server-side rendered.
//     //
//     // static async getInitialProps(appContext) {
//     //   // calls page's `getInitialProps` and fills `appProps.pageProps`
//     //   const appProps = await App.getInitialProps(appContext);
//     //
//     //   return { ...appProps }
//     // }

//     render() {
//         const { Component, pageProps } = this.props

//         return (
//             <ThemeProvider theme={theme}>
//                 <Component {...pageProps} />
//             </ThemeProvider>
//         )
//     }
// }

// export default MyApp;

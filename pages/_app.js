import Head from "next/head";
import "../globals.css"

export default function Home({Component, componentProps}) {
    return (
        <>
            <Head>
                <title>Next Shop</title>
            </Head>
            <Component {...componentProps} />
        </>
    )
}
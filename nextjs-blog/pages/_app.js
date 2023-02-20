import "../styles/globals.css"

import Header from "../components/Header"

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />

            <div className="container">
                <Component {...pageProps} />
            </div>
        </>
    )
}
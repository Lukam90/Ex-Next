import Link from "next/link"

import { useEffect } from "react"
import { useRouter } from "next/router"

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 3000)
    }, [])

    return (
        <div className="not-found">
            <h1>Woops!</h1>

            <h2>That page can't be found.</h2>

            <p>Go back to the <Link href="/">homepage</Link></p>
        </div>
    )
}
 
export default NotFound;
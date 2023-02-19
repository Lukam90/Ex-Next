import Link from "next/link"
import Head from "next/head"

import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>

			<div>
				<h1 className={styles.title}>Homepage</h1>

				<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur dolores natus quibusdam, in totam vitae fugit corporis ipsa inventore?</p>

				<p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi error temporibus nam ipsum? A nesciunt quam aut inventore nisi.</p>

				<Link href="/ninjas" className={styles.btn}>See Ninjas List</Link>
			</div>
		</>
	)
}

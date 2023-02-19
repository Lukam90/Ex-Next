import Link from "next/link"

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div>
			<Navbar />

			<h1>Homepage</h1>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius pariatur dolores natus quibusdam, in totam vitae fugit corporis ipsa inventore?</p>

			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi error temporibus nam ipsum? A nesciunt quam aut inventore nisi.</p>

			<Link href="/ninjas">See Ninjas List</Link>

			<Footer />
		</div>
	)
}

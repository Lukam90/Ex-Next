import Link from "next/link"

export default function Home() {
  	return (
		<div>
			<h1>Home Page</h1>

			<Link href="/users">Users</Link>
			<Link href="/posts">Posts</Link>
		</div>
  	)
}
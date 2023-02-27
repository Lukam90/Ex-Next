import { MongoClient } from "mongodb"

import { Fragment } from "react"

import Head from "next/head"

import MeetupList from "../components/meetups/MeetupList"

export default function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>React Meetups</title>
				<meta name="description" content="Next meetups app" />
			</Head>

			<MeetupList meetups={props.meetups} />
		</Fragment>
	)
}

/*
export async function getServerSideProps(context) {
	const req = context.req;
	const res = context.res;

	// Fetch data from an API
	return {
		props: {
			meetups: DUMMY_MEETUPS
		}
	}
}
*/

export async function getStaticProps() {
	// Fetch data from an API
	const client = await MongoClient.connect("mongodb://localhost:27017")
    const db = client.db()

    const meetupsCollection = db.collection("meetups")

	const meetups = await meetupsCollection.find().toArray()

	client.close()

	return {
		props: {
			meetups: meetups.map(meetup => ({
				title: meetup.title,
				address: meetup.address,
				image: meetup.image,
				id: meetup._id.toString(),
			}))
		},
		revalidate: 1
	}
}
import { MongoClient, ObjectId } from "mongodb"

import { Fragment } from "react"

import Head from "next/head"

import MeetupDetail from "../components/meetups/MeetupDetail"

export default function MeetupDetails(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.meetupData.title}</title>
				<meta name="description" content={props.meetupData.description} />
			</Head>

			<MeetupDetail 
				image={props.meetupData.image}
				title={props.meetupData.title}
				address={props.meetupData.address}
				description={props.meetupData.description}
			/>
		</Fragment>
	)
}

export async function getStaticPaths(context) {
	const meetupId = context.params.meetupId

	const client = await MongoClient.connect("mongodb://localhost:27017")
    const db = client.db()

    const meetupsCollection = db.collection("meetups")

	const selectedMeetup = await meetupsCollection.findOne({
		_id: ObjectId(meetupId)
	})

	client.close()

	return {
		props: {
			meetupData: {
				id: selectedMeetup._id.toString(),
				title: selectedMeetup.title,
				address: selectedMeetup.address,
				image: selectedMeetup.image,
				description: selectedMeetup.description,
			},
		}
	}
}

export async function getStaticProps(context) {
	// Fetch data for a single meetup

	const meetupId = context.params.meetupId

	return {
		props: {
			meetupData: {
				image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
				id: "m1",
				title: "A First Meetup",
				address: "Some address 5, 12345 Some City",
				description: "This is a first meetup"
			}
		}
	}
}
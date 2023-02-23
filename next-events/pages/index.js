import Layout from "../components/layout/Layout"

import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
	{
		id: "m1",
		title: "A First Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Some address 5, 12345 Some City",
		description: "This is a first meetup"
	},
	{
		id: "m2",
		title: "A Second Meetup",
		image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg",
		address: "Some address 10, 12345 Some City",
		description: "This is a second meetup"
	}
]

export default function HomePage(props) {
	return (
		<MeetupList meetups={props.meetups} />
	)
}

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

/*
export async function getStaticProps() {
	// Fetch data from an API
	return {
		props: {
			meetups: DUMMY_MEETUPS
		},
		revalidate: 1
	}
}
*/
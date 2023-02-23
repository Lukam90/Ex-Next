import MeetupDetail from "../components/meetups/MeetupDetail"

export default function MeetupDetails() {
	return (
		<MeetupDetail 
			image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/640px-Stadtbild_M%C3%BCnchen.jpg"
			title="A First Meetup"
			address="Some address 5, 12345 Some City"
			description="This is a first meetup"
		/>
	)
}

export async function getStaticPaths() {
	return {
		fallback: false,
		paths: [
			{
				params: {
					meetupId: "m1"
				}
			},
			{
				params: {
					meetupId: "m2"
				}
			}
		]
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
import NewMeetupForm from "../components/meetups/NewMeetupForm"

export default function NewsPage() {
    function addMeetupHandler() {

    }

	return (
		<NewMeetupForm onAddMeetup={addMeetupHandler} />
	)
}

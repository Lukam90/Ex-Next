export default function EventList({ events }) {
    return (
        <>
            <h1>List of events</h1>

            {
                events.map(event => {
                    return (
                        <div key={event.id}>
                            <h2>{event.title} {event.date} | {event.category}</h2>

                            <p>{event.description}</p>

                            <hr />
                        </div>
                    );
                })
            }
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch("http://localhost:4000/events");
    const data = await response.json();

    return {
        props: {
            events: data,
        }
    };
}
export default function NewsByCategory({ articles, category }) {
    return (
        <>
            <h1>
            Showing news for category <i>{category}</i>
            </h1>

            {
                articles.map(article => {
                    return (
                        <div key={article.id}>
                            <h2>{article.title}</h2>

                            <p>{article.description}</p>

                            <hr />
                        </div>
                    );
                })
            }
        </>
    )
}

export async function getServerSideProps(context) {
    const { params, req, res, query } = context;

    res.setHeader("Set-Cookie", ["name=Lukas"]);

    const { category } = params;

    const response = await fetch(`http://localhost:4000/news?category=${category}`);

    const data = await response.json();

    return {
        props: {
            articles: data,
            category
        }
    };
}
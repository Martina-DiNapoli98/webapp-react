export default function MovieReviewCard({ userReview }) {
    const { vote, name, text, created_at } = userReview;

    function printRating(vote) {
        const stars = []
        const empty = []

        for (let i = 0; i < vote; i++) {
            stars.push(<i key={`star filled - ${i}`} className="bi bi-star-fill"></i>)
        }
        for (let i = 0; i < 5 - vote; i++) {
            empty.push(<i key={`star empty - ${i}`} className="bi bi-star"></i>)
        }
        return [...stars, ...empty]
    }
    return (


        <>
            <div className="card mb-3">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <div className="vote">
                        vote: {printRating(vote)}
                    </div>
                </div>
                <div className="card-body">
                    <p>
                        {text}
                    </p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    Author: {name}
                    <div className="created-at">
                        create at: {new Date(created_at).toLocaleString()}
                    </div>
                </div>
            </div>
        </>
    )
}
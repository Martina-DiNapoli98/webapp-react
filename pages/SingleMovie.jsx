import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import MovieReviewCard from "../Components/MovieReviewCard"

export default function SingleMovie() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies/' + id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.error) {
                    navigate('/404')
                }

                setMovie(data)
            })
    }, [])
    return (


        <>

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <div className="row">
                        <h1 className="display-5 fw-bold">{movie?.title && movie.title}</h1>
                        <p className="col-md-8 fs-4">
                            {movie?.abstract && movie.abstract}
                        </p>
                        <div className="col-4">
                            <img src={`http://localhost:3000/${movie.image}`} width={250} alt="" />
                        </div>

                    </div>
                </div>
            </div>
            {
                movie?.reviews && movie.reviews.length > 0 ? (
                    <div className="container">
                        <div className="add-review">
                            <h3 className="mb-3">
                                Add your review
                            </h3>
                            <form action="POST" className="mb-3">
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" name="username" id="username" aria-describedby="helpId" placeholder="your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="vote" className="form-label">Vote</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="vote"
                                        id="vote"
                                        aria-describedby="helpId"
                                        placeholder=""
                                        max={5}
                                        min={1} />

                                </div>

                                <div className="mb-3">
                                    <label htmlFor="review" className="form-label">Review</label>
                                    <textarea className="form-control" rows="3" placeholder="write your review here.." name="review" id="">
                                    </textarea>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary mt-2">Submit review</button>
                                </div>
                            </form>
                        </div>
                        <h2 className="mb-3">
                            Reviews
                        </h2>

                        {
                            movie.reviews.map(review => (
                                <div key={review.id} className="container">
                                    <MovieReviewCard userReview={review} />
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <p>
                        No reviews yet
                    </p>
                )
            }
        </>
    )
}
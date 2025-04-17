import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import MovieReviewCard from "../Components/MovieReviewCard"
import MovieReviewForm from "../review/MovieReviewForm"
import GlobalContext from "../Contexts/GlobalContext"
import { useContext } from "react"

export default function SingleMovie() {
    const { id } = useParams()
    const [movie, setMovie] = useState({})
    const { setIsLoading } = useContext(GlobalContext)
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
                setIsLoading(false)
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
                            <MovieReviewForm movieId={movie.id} />
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
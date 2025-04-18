import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import GlobalContext from "../Contexts/GlobalContext";
import { useContext } from "react";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const { setIsLoading } = useContext(GlobalContext)

    useEffect(() => {
        setIsLoading(true)
        fetch('http://localhost:3000/api/v1/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data)

            }).then(() => {
                setIsLoading(false)
            })

    }, [])
    return (

        <>

            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Amazing movies reviews</h1>
                    <p className="col-md-8 fs-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex et corrupti nihil deleniti enim possimus minima natus libero, saepe consectetur!
                    </p>
                </div>
            </div>

            <section className="movies">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        {
                            movies.map(movie => (
                                <div key={movie.id} className="col" >
                                    <div className="card h-100">
                                        <Link to={`/movie/${movie.id}`} className="text-decoration-none text-dark">
                                            {movie.image && <img src={movie.image} className="card-img-top" alt={movie.title} />}
                                        </Link>
                                        <div className="card-body">
                                            <h3>{movie.title}</h3>
                                            <p>{movie.director}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </section>
        </>
    )
}
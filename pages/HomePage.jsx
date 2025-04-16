import { useEffect, useState } from "react"

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/v1/movies')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setMovies(data)
            })

    }, [])
    return (

        <>
            <section className="movies">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
                        {
                            movies.map(movie => (
                                <div key={movie.id} className="col" >
                                    <div className="card">
                                        <img src={movie.image} alt="" />
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
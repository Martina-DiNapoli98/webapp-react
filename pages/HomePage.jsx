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
            <h1>
                Welcome
            </h1>
        </>
    )
}
import { useState } from "react"

export default function MovieReviewForm({ movieId }) {


    const api_url = 'http://localhost:3000/api/v1/movies/' + movieId + '/reviews'



    const [formData, setFormData] = useState({
        name: '',
        vote: 1,
        text: ' '
    })
    const [formErrors, setFormErrors] = useState({})

    function isFormValid(data) {
        const errors = {}
        if (!data.name) { errors.name = 'Name is required' }
        if (!data.vote) { errors.vote = 'vote is required' }
        if (!data.text) { errors.text = 'text is required' }

        setFormErrors(errors)
        return Object.keys(errors).length === 0
    }

    function handleFormSubmit(e) {
        e.preventDefault()

        console.log(formData)

        if (!isFormValid(formData)) {
            console.log('Form is not valid');
            return
        }
        console.log('Form is valid')

        fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(formData)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    return (

        <>
            <form action="POST" className="mb-3" onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="username"
                        className="form-label">Username</label>
                    <input type="text"
                        className="form-control"
                        name="username"
                        id="username"
                        aria-describedby="helpId"
                        placeholder="your name"
                        autoComplete='off'
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
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
                        min={1}
                        autoComplete='off'
                        value={formData.vote}
                        onChange={(e) => setFormData({ ...formData, vote: parseInt(e.target.value) })}

                    />

                </div>

                <div className="mb-3">
                    <label htmlFor="review" className="form-label">Review</label>
                    <textarea className="form-control"
                        rows="3"
                        placeholder="write your review here.."
                        name="review"
                        id=""
                        autoComplete='off'
                        value={formData.text} onChange={(e) => setFormData({ ...formData, text: e.target.value })}>
                    </textarea>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary mt-2">Submit review</button>
                </div>
            </form>
        </>
    )
}
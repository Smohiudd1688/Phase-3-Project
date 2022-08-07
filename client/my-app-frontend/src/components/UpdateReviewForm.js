import React, {useState} from "react";

function UpdateReviewForm({id, onUpdateReviewSubmit, setIsUpdateClick}) {
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");

    function handleRatingChange(event) {
        setRating(event.target.value);
    }

    function handleReviewChange(event) {
        setReview(event.target.value);
    }

    function handleReviewSubmit(event) {
        event.preventDefault();

        const updatedReview = {
            rating: parseInt(rating),
            review: review
        }

        console.log(updatedReview);

        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
        .then(response => response.json())
        .then(data => onUpdateReviewSubmit(data));

        setRating("");
        setReview("");
        setIsUpdateClick(false);
    }

    return (
        <form id="updateForm" onSubmit={handleReviewSubmit}>
            <h3>Update Review</h3>
            <label htmlFor="rating">Updated Rating for this Show(1-5): </label>
            <input onChange={handleRatingChange} type="text" id="rating" name="rating" value={rating} /><br></br><br></br>
            <p className="formQ">What do you think about this show now: </p>
            <textarea onChange={handleReviewChange} rows="5" cols="35" id="about" value={review}></textarea><br></br><br></br>
            <input type="submit" />
        </form>
    )
}

export default UpdateReviewForm;
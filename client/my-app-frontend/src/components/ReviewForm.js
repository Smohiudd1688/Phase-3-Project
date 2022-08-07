import React, {useState} from "react";

function ReviewForm() {
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");
    const [name, setName] = useState("");

    function handleRatingChange(event) {
        setRating(event.target.value);
    }

    function handleReviewChange(event) {
        setReview(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleReviewSubmit(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={handleReviewSubmit}>
            <h3>Add a Review</h3>
            <label htmlFor="rating">How would you rate this show(1-5): </label>
            <input onChange={handleRatingChange} type="text" id="rating" name="rating" value={rating} /><br></br><br></br>
            <p className="formQ">What do you think about this show: </p>
            <textarea onChange={handleReviewChange} rows="5" cols="35" id="about" value={review}></textarea><br></br><br></br>
            <label htmlFor="name">Your name: </label>
            <input onChange={handleNameChange} type="text" id="name" name="name" value={name} /><br></br><br></br>
            <input type="submit" />
        </form>
    )
}

export default ReviewForm;
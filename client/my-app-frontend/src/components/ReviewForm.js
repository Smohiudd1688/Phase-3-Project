import React, {useState} from "react";

function ReviewForm({id, onReviewFormSubmit}) {
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

        if (isNaN(parseInt(rating)) || parseInt(rating) < 0 || parseInt(rating) > 5) {
            alert("Please enter a number between 1 and 5 for rating");
        } else {
            const newReview = {
                rating: parseInt(rating),
                review: review,
                name: name
            }
    
            fetch(`http://localhost:9292/shows/${id}/reviews`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newReview)
            })
            .then(response => response.json())
            .then(data => onReviewFormSubmit(data));
    
            setRating("");
            setReview("");
            setName("");
        }
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
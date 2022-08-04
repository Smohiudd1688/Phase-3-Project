import React, {useState} from "react";

function ReviewForm() {
    const [review, setReview] = useState("");
    const [name, setName] = useState("");

    function handleReviewChange(event) {
        setReview(event.target.value);
    }

    function handleNameChange(event) {
        setName(event.target.value);
    }

    return (
        <form>
            <h3>Add a Review</h3>
            <p className="formQ">What do you think about this show</p>
            <textarea onChange={handleReviewChange} rows="5" cols="35" id="about" value={review}></textarea><br></br><br></br>
            <label htmlFor="image">Your name: </label>
            <input onChange={handleNameChange} type="text" id="image" name="image" value={name} /><br></br><br></br>
            <input type="submit" />
        </form>
    )
}

export default ReviewForm;
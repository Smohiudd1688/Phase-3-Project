import React, { useState } from "react";
import UpdateReviewForm from "./UpdateReviewForm";

function TvReview({rating, review, name, id, onHandleDelete, onUpdateReviewSubmit}) {
    const [isUpdateClick, setIsUpdateClick] = useState(false);

    function handleDeleteReview() {
        fetch(`http://localhost:9292/reviews/${id}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => onHandleDelete(data))
    }
   
    return(
        <div className="review">
            <p>{"★".repeat(rating)}</p>
            <p>{review}</p>
            <p>-<em>{name}</em></p>
            <button onClick={handleDeleteReview} className="reviewButton">Delete Review</button>
            <button onClick={() => setIsUpdateClick(!isUpdateClick)} className="reviewButton">
                {isUpdateClick ? "Don't Update Review" : "Update Review"}
            </button>
            {isUpdateClick ? <UpdateReviewForm id={id} onUpdateReviewSubmit={onUpdateReviewSubmit} setIsUpdateClick={setIsUpdateClick} /> : null}
            <br></br><br></br><br></br><br></br>
        </div>
    );
}

export default TvReview;
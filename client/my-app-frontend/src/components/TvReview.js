import React from "react";

function TvReview({rating, review, name, id, onHandleDelete}) {
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
            <button className="reviewButton">Update Review</button>
            <br></br><br></br><br></br><br></br>
        </div>
    );
}

export default TvReview;
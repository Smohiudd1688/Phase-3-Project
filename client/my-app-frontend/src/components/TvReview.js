import React from "react";

function TvReview({rating, review, name}) {

    return(
        <div className="review">
            <p>{"★".repeat(rating)}</p>
            <p>{review}</p>
            <p>-<em>{name}</em></p>
            <button className="reviewButton">Delete Review</button>
            <button className="reviewButton">Change Review</button>
            <br></br><br></br><br></br><br></br>
        </div>
    );
}

export default TvReview;
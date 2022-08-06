import React from "react";

function TvReview() {

    return(
        <div className="review">
            <p>{"★".repeat(5)}</p>
            <p>This show is one of the best shows I have ever seen! This show is one of the best shows I have ever seen! This show is one of the best shows I have ever seen!</p>
            <p>-<em>Sana Mohiuddin</em></p>
            <button className="reviewButton">Delete Review</button>
            <button className="reviewButton">Change Review</button>
            <br></br><br></br><br></br><br></br>
        </div>
    );
}

export default TvReview;
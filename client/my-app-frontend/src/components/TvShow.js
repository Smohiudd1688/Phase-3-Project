import React, {useState} from "react";
import TvReview from "./TvReview";
import ReviewForm from "./ReviewForm";

function TvShow() {
    const [isReviewFormOn, setIsReviewFormOn] = useState(false);

    return (
        <div className="show">
            <h3>The Big Bang Theory</h3>
            <img src="data:image/jpeg;base64,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" />
            <p>Number of Seasons: <strong>12</strong></p><br></br>
            <TvReview/>
            <button className="addButton" onClick={() => setIsReviewFormOn(!isReviewFormOn)}>
                {isReviewFormOn? "Don't Add Review" : "Add Review"}
            </button>
            {isReviewFormOn ? <ReviewForm /> : null}
            <br></br><br></br>
        </div>
    );
}

export default TvShow;
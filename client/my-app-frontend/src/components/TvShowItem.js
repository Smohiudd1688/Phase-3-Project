import React, {useState} from "react";
import TvReview from "./TvReview";
import ReviewForm from "./ReviewForm";

function TvShowItem({id, title, image, numOfSeasons}) {
    const [isReviewFormOn, setIsReviewFormOn] = useState(false);

    return (
        <div className="show">
            <h3>{title}</h3>
            <img src={image} />
            <p>Number of Seasons: <strong>{numOfSeasons}</strong></p><br></br>
            <TvReview/>
            <button className="addButton" onClick={() => setIsReviewFormOn(!isReviewFormOn)}>
                {isReviewFormOn? "Don't Add Review" : "Add Review"}
            </button>
            {isReviewFormOn ? <ReviewForm /> : null}
        </div>
    );
}

export default TvShowItem;
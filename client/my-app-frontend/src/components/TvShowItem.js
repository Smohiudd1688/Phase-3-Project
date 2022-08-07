import React, {useState, useEffect} from "react";
import TvReview from "./TvReview";
import ReviewForm from "./ReviewForm";

function TvShowItem({id, title, image, numOfSeasons}) {
    const [isReviewFormOn, setIsReviewFormOn] = useState(false);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9292/shows/${id}/reviews`)
        .then(response => response.json())
        .then(data => setReviews(data));
    }, []);

    const renderReviews = reviews.map(reviewItem => {
        return <TvReview
                    key={reviewItem.id}
                    rating={reviewItem.rating}
                    review={reviewItem.review}
                    name={reviewItem.name}
                />
    });

    return (
        <div className="show">
            <h3>{title}</h3>
            <img src={image} />
            <p>Number of Seasons: <strong>{numOfSeasons}</strong></p><br></br>
            {renderReviews}
            <button className="addButton" onClick={() => setIsReviewFormOn(!isReviewFormOn)}>
                {isReviewFormOn? "Don't Add Review" : "Add Review"}
            </button>
            {isReviewFormOn ? <ReviewForm /> : null}
        </div>
    );
}

export default TvShowItem;
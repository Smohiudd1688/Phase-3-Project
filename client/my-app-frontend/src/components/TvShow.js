import React, {useState} from "react";
import TvReview from "./TvReview";
import ReviewForm from "./ReviewForm";
import TvShowItem from "./TvShowItem";
import ShowForm from './ShowForm';

function TvShow({tvShows}) {
    const [isShowForm, setIsShowForm] = useState(false);

    const renderTvShows = tvShows.map(show => {
        return <TvShowItem
                  key={show.id}
                  title={show.title}
                  image={show.image}
                  numOfSeasons={show.num_of_seasons}
                  id={show.id}
                />
    });

    return (
        <div>
            {renderTvShows}
            <br></br><br></br>
            <button className='addButton' onClick={() => setIsShowForm(!isShowForm)}>
                {isShowForm ? "Don't Add Show" : "Add Show"}
            </button>
            {isShowForm ? <ShowForm /> : null}
        </div>
    );
}

export default TvShow;
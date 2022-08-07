import React, {useState} from "react";
import TvShowItem from "./TvShowItem";
import ShowForm from './ShowForm';

function TvShow({tvShows, setTvShows}) {
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

    function handleShowFormSubmit(newShow) {
        setIsShowForm(false);
        setTvShows([...tvShows, newShow]);
    }

    return (
        <div>
            {renderTvShows}
            <button className='addButton' onClick={() => setIsShowForm(!isShowForm)}>
                {isShowForm ? "Don't Add Show" : "Add Show"}
            </button>
            {isShowForm ? <ShowForm onNewShowSubmit={handleShowFormSubmit} /> : null}
            <br></br><br></br><br></br><br></br>
        </div>
    );
}

export default TvShow;
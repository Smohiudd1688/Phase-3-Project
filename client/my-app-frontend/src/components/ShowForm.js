import React, { useState } from "react";

function ShowForm({onNewShowSubmit}) {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [numOfSeasons, setNumOfSeasons] = useState("");

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.value);
    }

    function handleSeasonsChange(event) {
        setNumOfSeasons(event.target.value);
    }

    function handleShowSubmit(event) {
        event.preventDefault();

        if (isNaN(parseInt(numOfSeasons)) || parseInt(numOfSeasons) < 0) {
            alert("Please enter a number between 1 and 5 for rating");
        } else {
            const newShow = {
                title: title,
                image: image,
                num_of_seasons: parseInt(numOfSeasons)
            }
    
            fetch("http://localhost:9292/shows", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newShow)
            })
            .then(response => response.json())
            .then(data => onNewShowSubmit(data))
            
            setTitle("");
            setImage("");
            setNumOfSeasons("");
        }
    }

    return(
        <form onSubmit={handleShowSubmit}>
            <h3>Add a TV Show</h3>
            <label htmlFor="title">Title: </label>
            <input onChange={handleTitleChange} type="text" id="title" name="title" value={title} /><br></br><br></br>
            <label htmlFor="image">Image: </label>
            <input onChange={handleImageChange} type="text" id="image" name="image" value={image} /><br></br><br></br>
            <label htmlFor="seasons">Number of Seasons: </label>
            <input onChange={handleSeasonsChange} type="text" id="seasons" name="seasons" value={numOfSeasons} /><br></br><br></br>
            <input type="submit" />
        </form>
    );
}
export default ShowForm;
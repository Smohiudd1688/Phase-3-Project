import React, { useState } from "react";

function ShowForm() {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");

    function handleTitleChange(event) {
        setTitle(event.target.value);
    }

    function handleImageChange(event) {
        setImage(event.target.value);
    }

    return(
        <form>
            <h3>Add a TV Show</h3>
            <label htmlFor="title">Title: </label>
            <input onChange={handleTitleChange} type="text" id="title" name="title" value={title} /><br></br><br></br>
            <label htmlFor="image">Image: </label>
            <input onChange={handleImageChange} type="text" id="image" name="image" value={image} /><br></br><br></br>
            <input type="submit" />
        </form>
    );
}
export default ShowForm;
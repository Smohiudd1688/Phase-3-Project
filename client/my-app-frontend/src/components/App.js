import React, {useState, useEffect} from 'react';
import '../App.css';
import Header from './Header';
import TvShow from './TvShow';

function App() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/shows")
    .then(response => response.json())
    .then(data => setTvShows(data));
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <TvShow tvShows={tvShows} />
    </div>
  );
}

export default App;

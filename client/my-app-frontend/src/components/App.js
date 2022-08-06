import React, {useState} from 'react';
import '../App.css';
import Header from './Header';
import ShowForm from './ShowForm';
import TvShow from './TvShow';

function App() {
  const [isShowForm, setIsShowForm] = useState(false);

  return (
    <div className="App">
      <Header></Header>
      <TvShow /><br></br><br></br>
      <button className='addButton' onClick={() => setIsShowForm(!isShowForm)}>
        {isShowForm ? "Don't Add Show" : "Add Show"}
      </button>
      {isShowForm ? <ShowForm /> : null}
    </div>
  );
}

export default App;

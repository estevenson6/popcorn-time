import './App.css';
import moviesArray from "./data/movies.json";
import { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(moviesArray);
  
  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((element) => {
      return element.id !== movieId;
    })
    setMoviesToDisplay(newList)
  }

  return (
    <div className="App">
     <Header  numberOfMovies={moviesToDisplay.length}/>
     <Main moviesArray={moviesToDisplay} deleteFunction={deleteMovie}/>
     <Footer />
    </div>
  );
}

export default App;

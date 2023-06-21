import {useState} from 'react';
import './Main.css';
import moviesArray from "../data/movies.json";
function Main(){

   const [moviesToDisplay, setMoviesToDisplay] = useState(moviesArray);

   let message = "";
   if(moviesToDisplay.length > 0){
   message = <h1>Number of Movies: {moviesToDisplay.length}</h1>
   }
   else{
    message = <h1>Sorry, no movies to display</h1>
   }

    const deleteMovie = (movieId) => {
      const newList = moviesToDisplay.filter((element) => {
        return element.id !== movieId;
      })
      setMoviesToDisplay(newList)
    }


    return(
        <div className="Main">
        {message}
        {moviesToDisplay.map(function(movieObj){
            return(
                <div key={movieObj.id} className='card'>
                    <p>{movieObj.title}</p>
                    <p>Rating: {movieObj.rating}</p>
                    {/* {movieObj.rating > 8 && <p>This movie is fine.</p>} */}
                    {movieObj.rating < 8 ? <p>Don't bother</p> : <p>This movie is fine.</p>}
                    {movieObj.title === "Amélie" && <p>actually this is really good.</p>}
                    {movieObj.imgURL ? <img src={movieObj.imgURL}/> : <img src="https://i.pinimg.com/474x/bb/ed/5f/bbed5f14afed3a1be010a273b106c622.jpg"/>}
               <p><button onClick={() => {deleteMovie(movieObj.id)}}>Delete this movie</button></p>
               </div>
            )
        })}
        </div>
    )
}

export default Main
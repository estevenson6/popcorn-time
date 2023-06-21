import './Main.css';
import Movie from './Movie'


function Main(props){


    return(
        <div className="Main">
        <div className="movieList">
        {props.moviesArray.map(function(movieObj){
          return(
            <Movie key={movieObj.id} movieDetails={movieObj} deleteFunction={props.deleteFunction}/>
          )
        })}
        </div>
        </div>
    )
}

export default Main
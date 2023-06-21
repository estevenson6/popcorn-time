import "./Movie.css";

function Movie(props) {
  return (
    <div className="Movie">
      <div className="card">
        <h2>{props.movieDetails.title}</h2>
        <p>Rating: {props.movieDetails.rating}</p>
        {/* {props.rating > 8 && <p>This movie is fine.</p>} */}
        {props.movieDetails.rating < 8 ? (
          <p>Don't bother</p>
        ) : (
          <p>This movie is ok, I guess.</p>
        )}
        {props.movieDetails.title === "Amélie" && (
          <p>actually this is really good.</p>
        )}
        {props.movieDetails.imgURL ? (
          <img src={props.movieDetails.imgURL} />
        ) : (
          <img className="gladiator" src="https://images.propstore.com/7c3cb7a00f964b535b5c826e0297ff7a.jpg" />
        )}
        <p>
          <button
            onClick={() => {
              props.deleteFunction(props.movieDetails.id);
            }}
          >
            Delete this movie
          </button>
        </p>
      </div>
    </div>
  );
}

export default Movie;

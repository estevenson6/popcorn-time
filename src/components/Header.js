import "./Header.css";
function Header(props) {
  let message = "";
  if (props.numberOfMovies > 0) {
    message = <h2>Number of Movies: {props.numberOfMovies}</h2>;
  } else {
    message = <h2>Sorry, no movies to display</h2>;
  }

  return (
    <header className="Header">
      <h1>🍿 Popcorn Time 🍿</h1>
      {message}
    </header>
  );
}

export default Header;

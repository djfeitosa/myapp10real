import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spiderman", ratings: 3 },
    { id: 2, title: "Superman", ratings: 3 },
    { id: 3, title: "Thor", ratings: 3 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick 4" } : m))
    );
  };
//self-center text-9xl font-semibold whitespace-nowrap
  return (
    <>
      {movies.map((movie) => (
        <li key={Math.random()} className="text-3xl font-semibold">{movie.title}</li>
      ))}
      <button
        type="button"
        onClick={handleClick}
        className="text-white bg-blue-500 font-medium rounded-lg px-5 py-2.5 text-center ml-2 mt-2 mr-2 mb-2"
      >
        Change Name
      </button>
    </>
  );
}

export default App;

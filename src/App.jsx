import "./css/App.css";
import MovieCard from "./components/MovieCard";
import Navbar from "./components/Navbar";
import Favourites from "./pages/Favorites";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
  return (
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;

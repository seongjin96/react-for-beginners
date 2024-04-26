import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from "./routes/Home";
import MovieApp from "./routes/MovieApp";
import Todo from "./routes/Todo";
import Detail from "./components/Movie/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<MovieApp />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;

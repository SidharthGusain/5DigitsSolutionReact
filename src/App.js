import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <div className="site-wrap" id="main">
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

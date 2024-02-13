import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import NoPage from "./pages/nopage";

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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;

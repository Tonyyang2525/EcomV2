import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";
import Contact from "./pages/contact";
import Nav from "./components/nav";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Nav />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

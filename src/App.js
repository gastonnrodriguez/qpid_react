import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/landing/Header/Header";
import Hero from "./components/landing/Hero/Hero";
import Main from "./components/landing/Features/Features";
import Footer from "./components/landing/Footer/Footer";
import Home from "./pages/home/Home/Home";
import("../src/App.css");

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "../assets/scripts/scripts.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header />
              <Hero />
              <Main />
              <Footer />
            </>
          }
        ></Route>
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

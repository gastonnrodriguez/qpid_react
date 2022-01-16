import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import CardList from "../Cards/CardList";
import Footer from "../Footer/Footer";
import axios from "axios";
//import "./Home.css";

const Home = () => {
  const [proposals, setProposals] = useState([]);
  useEffect(async () => {
    const objectBody = {
      id: "61e1f9690984e7a67e38648e",
    };
    const response = await axios.post(
      "http://localhost:3000/proposals",
      objectBody
    );
    setProposals(response.data.proposals);
  }, []);

  useEffect(() => {
    if (proposals && proposals.length>0) {
      const script = document.createElement("script");
      script.src = "../../assets/scripts/tinderCards.js";
      script.async = true;
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [proposals]);

  return (
    <div className="homeProposals">
      <header>
        <Navbar />
      </header>
      <main className="main">
        <CardList proposals={proposals} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

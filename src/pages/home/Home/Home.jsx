import Navbar from "../Navbar";
import CardList from "../Cards/CardList";
import Footer from "../Footer/Footer";
import axios from "axios";

const Main = async ({ id, token }) => {
  const objectBody = {
    id: id,
  };
  const headers = {
    "auth-token": token,
  };
  const response = await axios.post(
    "http://localhost:3000/proposals",
    objectBody,
    headers
  );
  const proposals = response.data;

  return (
    <div className="home">
      <header>
        <Navbar />
      </header>
      <main>
        <CardList proposals={proposals} />
      </main>
      <Footer />
    </div>
  );
};

export default Main;

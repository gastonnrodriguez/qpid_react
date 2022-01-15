import Navbar from "../Navbar";
import CardList from "../Cards/CardList";
import Footer from "../Footer/Footer";
function Main() {
  return (
    <div className="home">
      <header>
        <Navbar />
      </header>
      <main>
        <CardList />
      </main>
      <Footer/>
    </div>
  );
}

export default Main;

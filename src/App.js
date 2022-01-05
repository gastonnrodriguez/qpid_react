import { useEffect } from 'react';
import Header from './components/landing/header/Header';
import Hero from './components/landing/hero/Hero';
import Main from './components/landing/main/Features';
import Footer from './components/landing/footer/Footer';
import ('../src/App.css');


const App = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "../assets/scripts/scripts.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div >
      <Header/>
      <Hero/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

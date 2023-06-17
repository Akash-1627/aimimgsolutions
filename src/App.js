import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Call from './components/Call';

function App() {
  return (
    <>
    <Navbar/>
    <Services/>
    <Cards/>
    <Call/>
    <Footer/>
    </>
  );
}

export default App;

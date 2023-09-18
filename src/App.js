import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';

import Navbartest from './Components/NavBar/Navbartest';
import Home from './Components/Home/Home';
import Filtre from './Components/Filtre/Filtre';
import Footer from './Components/Footer/Footer';
import Atelier from './Components/Atelier/Atelier';
import Produits from './Components/Produits/Produits';
import Contact from './Components/Contact/Contact';
import Propos from './Components/Propos/Propos';


function App() {
  return (
    <div className="App container-fluid">
      <Navbartest />


      <Routes>

        <Route path='/' element = {<Home />} />
        <Route path='/atelier' element = { <Atelier/>} />
        <Route path='/produits' element = {<Produits />} />
        <Route path='/a propos de nous' element = {<Propos />} />
        <Route path='/contact' element = {<Contact />} />
        
      </Routes>

      {/* <Filtre /> */}
      <Footer />
    </div>
  );
}

export default App;

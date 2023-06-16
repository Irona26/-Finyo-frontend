import "./styles.css";
import {React, useState } from 'react';
import AdsList from './AdsList';
import Header from './components/heading/Header';
//import Home from "./pages/Home";
import {Context} from "./Context"

import { Routes, Route} from 'react-router-dom';
import {About} from './pages/About';
import {Blog} from './pages/Blog';
import {Help} from './pages/Help';

function App() {


  const [currentApart, setCurrentApart] = useState('');
  const [currentRoomQuant, setCurrentRoomQuant] = useState('');
  const [firstprice, setFirstPrice] = useState('');
  const [lastprice, setLastPrice] = useState('');
  const [currency, setCurrency] = useState('');

  return (
    
  <div className="App"> 



  <Routes>
  <Route path="/" element={''} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/help" element={<Help />} />
 

  </Routes>
  
 

  <Context.Provider 
      value={{
        currentApart,
        setCurrentApart,
        currentRoomQuant,
        setCurrentRoomQuant,
        firstprice,
        setFirstPrice,
        lastprice,
        setLastPrice,
        currency,
        setCurrency
      }}>

  <Header />


 

  <AdsList filtrAp={currentApart}
          filtrRo={currentRoomQuant}
          filtrFP={firstprice}
          filtrLP={lastprice}
          filtrCur={currency}
  />
  </Context.Provider> 

  </div>
  );
}


export default App;

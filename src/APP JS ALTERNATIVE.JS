import "./styles.css";
import React,{ useContext, useMemo, useState } from 'react';
//import AdsList from './AdsList';
import Header from './components/heading/Header';
import Home from "./pages/Home";
import {SearchApartContext, SearchApartContextCopy} from "./SearchApartContext"


function App() {


  const [currentApart, setCurrentApart] = useState('');
  const [currentRoomQuant, setCurrentRoomQuant] = useState('');
  
  const value = useMemo(
    () => ({currentApart, setCurrentApart}),
    [currentApart],
  console.log(currentApart)

  );

  const vvalue = useMemo(
      () => ({currentRoomQuant, setCurrentRoomQuant}),
    [currentRoomQuant],
    console.log(currentRoomQuant)
  );


  return (
    
  <div className="App"> 

 <SearchApartContext.Provider vvalue={vvalue} value={value}>
    {useMemo(() => (   
      <Header />  
    ), [] )}
   </SearchApartContext.Provider> 

  <Home />

  

  </div>
  );
}


export default App;

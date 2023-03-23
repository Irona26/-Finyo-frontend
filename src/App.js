import "./styles.css";
import React, { useState } from "react";
import AdsList from "./AdsList";
import Header from "./components/heading/Header";
import Home from "./pages/Home";
import RoomsFilter from "./components/heading/RoomsFilter";
import GlobalContext from "./SearchApartContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Там есть еще один вариант РАБОЧИЙ в -APP JS ALTERNATIVE-, но я еще не придумала, как передать несколько значений в Memo:)

function App() {
  const [currentApart, setCurrentApart] = useState(""); // null | undefined
  const [currentRoomQuant, setCurrentRoomQuant] = useState(0);

  console.log("App apart: ", currentApart);

  return (
      <GlobalContext.Provider
        value={{
          currentApart,
          setCurrentApart,
          currentRoomQuant,
          setCurrentRoomQuant,
        }}
      >
        <div className="App">
          <Header test123={123}>
            <RoomsFilter />
          </Header>
          <Home />
          <AdsList values="apartment" />
        </div>
      </GlobalContext.Provider>
  );
}

export default App;

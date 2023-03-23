import React, { useMemo, useState } from 'react';
import AdsList from './AdsList';
import Header from './components/heading/Header';
import Home from './pages/Home';
import ApartsFilter from './components/heading/ApartsFilter';
import RoomsFilter from './components/heading/RoomsFilter';

import './styles.css';
import GlobalContext from './SearchApartContext';

// Там есть еще один вариант РАБОЧИЙ в -APP JS ALTERNATIVE-, но
// я еще не придумала, как передать несколько значений в Memo:)

function App() {
  const [currentApart, setCurrentApart] = useState('');
  const [currentRoomQuant, setCurrentRoomQuant] = useState('');

  const value = useMemo(
    () => ({ currentApart, setCurrentApart }),
    [currentApart],
  );

  console.log(currentApart);

  const vvalue = useMemo(
    () => ({ currentRoomQuant, setCurrentRoomQuant }),
    [currentRoomQuant],
  );
  console.log(currentRoomQuant);

  return (
    <div className="App">
      <Header vvalue={vvalue} value={value}>
        {useMemo(
          () => (
            <RoomsFilter />
          ),
          [],
        )}

        <GlobalContext.Provider value={value}>
          {useMemo(
            () => (
              <ApartsFilter />
            ),
            [],
          )}
        </GlobalContext.Provider>
      </Header>

      <Home />
      <AdsList values="apartment" />
    </div>
  );
}

export default App;

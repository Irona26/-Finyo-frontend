import React, {useState} from "react";

const SearchApartContext = React.createContext(
    {
        currentApart: '',
        setCurrentApart: () => {},
    },
  
);

const SearchApartContextCopy = React.createContext(
    {
        currentRoomQuant: '',
        setCurrentRoomQuant: () => {},
    },
  
);

export {SearchApartContext, SearchApartContextCopy} 
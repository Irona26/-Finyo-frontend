/* eslint-disable react/jsx-props-no-spreading */

import { React, useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useForm, FormProvider } from 'react-hook-form';

import Home from './pages/Home';
import Context from './Context';
import Footer from './components/footer/Footer';

import About from './pages/About';
import Blog from './pages/Blog';
import Help from './pages/Help';
import Navbar from './components/navbar/Navbar';

function App() {
  const [currentPage, setCurrenPage] = useState(1);
  const [cardsPerPage] = useState(3);
  const [isFormSubmitted, formSubmit] = useState(false);
  const [cardListLength, setLength] = useState(11);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const paginate = (pageNumber) => {
    setCurrenPage(pageNumber);
  };

  const methods = useForm({
    defaultValues: {
      fromPrice: 0,
      lastPrice: 0,
      currency: '1',
      currentApartment: '',
      currentRoomQuant: '',
      currentStreet: '',
    },
  });

  const onSubmit = () => {
    formSubmit(!isFormSubmitted);
  };

  const contextValues = useMemo(() => ({
    firstCardIndex,
    lastCardIndex,
    isFormSubmitted,
    cardListLength,
    cardsPerPage,
    setLength,
    paginate,
  }));
  return (

    <div className="App">
      <FormProvider {...methods} onSubmit={methods.handleSubmit(onSubmit, () => console.log('invalid'))}>
        <Context.Provider
          value={contextValues}
        >
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Context.Provider>
        <Footer />
      </FormProvider>
    </div>
  );
}

export default App;

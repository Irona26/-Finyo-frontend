/* eslint-disable react/jsx-props-no-spreading */

import { React, useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useForm, FormProvider } from 'react-hook-form';

import Home from './pages/Home';
import Context from './Context';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navbar from './components/navbar/Navbar';
import CardPage from './pages/CardPage';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormSubmitted, formSubmit] = useState(false);
  const [cardListLength, setLength] = useState(11);
  const [cardId, setCardId] = useState(null);

  const cardsPerPage = 3;
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
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
    cardId,
    setCardId,
  }));

  return (

    <div>
      <FormProvider {...methods} onSubmit={methods.handleSubmit(onSubmit, () => console.log('invalid'))}>
        <Context.Provider
          value={contextValues}
        >
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="cardpage" element={<CardPage />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact/*" element={<Contact />} />
          </Routes>
          <Footer />
        </Context.Provider>
      </FormProvider>
    </div>
  );
}

export default App;

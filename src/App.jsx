/* eslint-disable react/jsx-props-no-spreading */

import { React, useState, useMemo } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { useForm, FormProvider } from 'react-hook-form';

import Home from './pages/Home';
import Sell from './pages/Sell';
import Buy from './pages/Buy';
import Rent from './pages/Rent';
import Grodno from './pages/Blog/Grodno';
import Visit from './pages/Blog/PlacesToVisit';
import Townhouses from './pages/Blog/Townhouses';
import Context from './Context';
import Footer from './components/footer/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navbar from './components/navbar/Navbar';
import CardPage from './pages/CardPage';

function App() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [isFormSubmitted, formSubmit] = useState(false);
  const [cardListLength, setLength] = useState(11);
  const [cardId, setCardId] = useState(null);
  const [tabValue, setTabValue] = useState('buy');
  const [cardsPerPage, setCardsPerPage] = useState(3);

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

  const contextValues = useMemo(
    () => ({
      firstCardIndex,
      lastCardIndex,
      isFormSubmitted,
      cardListLength,
      cardsPerPage,
      setLength,
      paginate,
      cardId,
      setCardId,
      setTabValue,
      tabValue,
      setCardsPerPage,
    }),
    [firstCardIndex,
      lastCardIndex,
      isFormSubmitted,
      cardListLength,
      cardsPerPage,
      setLength,
      paginate,
      cardId,
      setCardId,
      setTabValue,
      tabValue,
      setCardsPerPage,
      isFormSubmitted],
  );

  const onSubmit = () => {
    formSubmit(!isFormSubmitted);
    navigate(`${tabValue}`);
  };

  return (

    <div>
      <FormProvider {...methods} onSubmit={methods.handleSubmit(onSubmit, () => console.log('invalid'))}>
        <Context.Provider
          value={contextValues}
        >
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="sell" element={<Sell />} />
            <Route path="buy" element={<Buy />} />
            <Route path="rent" element={<Rent />} />
            <Route path="cardpage" element={<CardPage />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/grodno" element={<Grodno />} />
            <Route path="blog/visit" element={<Visit />} />
            <Route path="blog/townhouses" element={<Townhouses />} />
            <Route path="contact/*" element={<Contact />} />
          </Routes>
          <Footer />
        </Context.Provider>
      </FormProvider>
    </div>
  );
}

export default App;

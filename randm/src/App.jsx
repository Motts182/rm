import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharactersProvider } from './context/CharactersContext';
import Layout from './layout/Layout';
import Home from './pages/home';

function App() {

  return (
    <CharactersProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CharactersProvider>
  )
}

export default App

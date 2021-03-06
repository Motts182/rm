import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharactersProvider } from './context/CharactersContext';
import Layout from './layout/Layout';
import Home from './pages/home';
import Info from './pages/Info';

function App() {

  return (
    <CharactersProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Info />} />
            <Route path='home'element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CharactersProvider>
  )
}

export default App

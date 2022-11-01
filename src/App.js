import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import HomeDetail from './routes/home-detail/home-detail.jsx';
import Authentication from './routes/authentication/authentication.component';
import Reserve from './routes/reserve/reserve.component';

const App = () => (
  <Routes>
    <Route path="/" element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path="house" element={<HomeDetail />} />
      <Route path="auth" element={<Authentication />} />
      <Route path="reserve" element={<Reserve />} />
    </Route>
  </Routes>
);

export default App;

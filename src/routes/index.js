import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../screens/home/index';
import Search from '../screens/Search';

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  );
}

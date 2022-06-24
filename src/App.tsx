import React from 'react';
import Navigation from './app/Navigation';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Counter } from './features/counter/Counter';

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};

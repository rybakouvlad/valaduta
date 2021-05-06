import React from 'react';
import { Routes } from '../Routes';
import { Header } from '../components/Header';
import '../Styles/style.scss';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes />
    </React.Fragment>
  );
};

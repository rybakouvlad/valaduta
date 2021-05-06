import { About } from 'Components/home/About';
import { Beers } from 'Components/home/Beers';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <>
      <About />
      <Beers />
    </>
  );
};

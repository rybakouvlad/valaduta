import React from 'react';
import aboutValadutaImg from '../../assets/aboutValaduta.png';

export const About: React.FC = () => {
  console.log(aboutValadutaImg);

  return (
    <section className="home-about">
      <div className="home-about__img">
        <img src={aboutValadutaImg} alt="about" />
      </div>
      <div className="home-about__text">
        <h3>НАША ПИВОВАРНЯ</h3>
        <p>
          Valaduta — белорусская пивоварня, появившаяся в 2018 году. Проект реализовывается в рамках восстановления
          здания бровара XIX века в деревне Володута Червенского района.
        </p>
      </div>
    </section>
  );
};

import React from 'react';
import Slider from 'react-slick';
import beerList from '../../beers';

export const Beers: React.FC = () => {
  const settings = {
    className: 'center',
    infinite: true,
    // centerPadding: '60px',
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
    },
  };
  return (
    <section className="our-beer-section">
      <h2>НАШЕ ПИВО</h2>
      <Slider {...settings}>
        {beerList.map((el, index) => {
          return (
            <div className="beer-card-slider" key={index}>
              <img src={el.img} alt={el.name} />
              <div className="beer-card-slider__name">{el.name}</div>
              <div className="beer-card-slider__style">{el.style}</div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

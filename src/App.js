import React, { useEffect, useState } from 'react';
import './App.scss';

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="app">

      <header className="header">
        <div className="header__logo"></div>

        <input type="checkbox" id="toggle" className="header__checkbox" />
        <label for="toggle" className="header__burger">
          <i class="header__burger__bars" aria-hidden="true"></i>
        </label>

        <ul class="header__menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#cart">Cart</a></li>
        </ul>


        <nav className="header__nav">
          <div className="header__nav__item">
            <a href="#home" className="header__nav__item__link">Home</a>
          </div>
          <div className="header__nav__item">
            <a href="#products" className="header__nav__item__link">Products</a>
          </div>
          <div className="header__nav__item">
            <div className='header__nav__item__cart' />
          </div>
        </nav>
      </header>

      <section className="banner">
        <div className="banner__content">
          <div className="banner__title">Discover the vast expanses of <span>space</span> </div>
          <div className="banner__subtitle">Where the possibilities are <span>endless!</span></div>
          <button className="banner__button">Learn more</button>
        </div>
        <div className='banner__earth' />
      </section>

      <section className="offers">
        <h2 className="offers__header">Offers</h2>
        <div className="offers__grid">
          <div className="offers__item offers__item--1">
            <div className="offers__item__title">Move the borders of reality!</div>
            <div className="offers__item__description">
              {!isMobile ? 'Go on a space adventure - it\'s possible with us!' : 'Go on a space adventure'}
            </div>
            <button className="offers__item__button">Learn more</button>
          </div>
          <div className="offers__item offers__item--2">
            <div className="offers__item__title">Space is not just stars and planets</div>
            <div className="offers__item__description">
              {!isMobile ? 'Go on a space adventure' : 'it is a majestic journey to'}
            </div>
            <button className="offers__item__button">Learn more</button>
          </div>
          <div className="offers__item offers__item--3">
            <div className="offers__item__title">For those who dream of stars</div>
            <div className="offers__item__description">Our offer makes your dream come true</div>
            <button className="offers__item__button">Learn more</button>
          </div>
          <div className="offers__item offers__item--4">
            <div className="offers__item__title">Fulfill your fantastic dreams</div>
            <div className="offers__item__description">Space has never been so close</div>
            <button className="offers__item__button">Learn more</button>
          </div>
        </div>
      </section>

      <section class="info-text">
        <div class="info-text__header">Embark on a space journey</div>
        <div class="info-text__content">
          Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets, and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement, and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.
        </div>
        <a href="#more-info" class="info-text__read-more">Read more</a>
      </section>

      <footer className="footer">
        <div className='footer__content'>
          <div className='footer__logo' />
          <p className="footer__text">Exciting space adventure!</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

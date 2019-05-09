import React, { Component } from 'react';

import '../stylesheets/App.scss';

const MediaCard = props => {
  const { name, date, image, description, likes, heartFill } = props;
  const heart = heartFill ? <i className="fas fa-heart likes__icon" /> : <i class="far fa-heart likes__icon" />;

  const cardHeader = (
    <header className="card__header">
      <img src={image} alt="profile" className="header__image" />
      <div className="header__text">
        <h2 className="header__author">{name}</h2>
        <p className="header__date">{date}</p>
      </div>
    </header>
  );

  const mainContent = (
    <main className="card__main">
      <p className="main__text">{description}</p>
    </main>
  );

  const footerContent = (
    <footer className="card__footer">
      <a href="hola" className="footer__link">
        Leer Mas...
      </a>
      <div className="footer__likes">
        <p className="likes__number">{likes}</p>
        {heart}
      </div>
    </footer>
  );

  const card = (
    <div className="card">
      {cardHeader}
      {mainContent}
      {footerContent}
    </div>
  );

  const appContent = <article className="article">{card}</article>;
  return appContent;
};

export default MediaCard;

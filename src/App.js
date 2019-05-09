import React, { Component } from 'react';
import profileImage from './images/profile.jpg';
import './stylesheets/App.scss';

class App extends Component {
  render() {
    const cardHeader = (
      <header className="card__header">
        <img src={profileImage} alt="profile" className="header__image" />
        <div className="header__text">
          <h2 className="header__author">Alex Guerrero</h2>
          <p className="header__date">Lunes 26 de junio de 2017</p>
        </div>
      </header>
    );

    const mainContent = (
      <main className="card__main">
        <p className="main__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora quas fugit, adipisci modi, iure, nam placeat illo quis sequi labore ex impedit autem consequatur enim laborum perferendis accusamus temporibus!Excepturi alias possimus quibusdam praesentium consequuntur. Vitae,
          deserunt, nobis exercitationem ullam similique quia tempore eveniet ipsum eos inventore, incidunt vel et asperiores nihil suscipit hic amet consectetur. Velit, modi aperiam.
        </p>
      </main>
    );

    const footerContent = (
      <footer className="card__footer">
        <a href="hola" className="footer__link">
          Leer Mas...
        </a>
        <div className="footer__likes">
          <p className="likes__number">37</p>
          <i className="fas fa-heart likes__icon" />
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

    const appContent = <article className="App">{card}</article>;
    return appContent;
  }
}

export default App;

import React, { Component } from 'react';
import MediaCard from './MediaCard';
import profileImage from '../images/profile.jpg';

const text =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque tempora quas fugit, adipisci modi, iure, nam placeat illo quis sequi labore ex impedit autem consequatur enim laborum perferendis accusamus temporibus!Excepturi alias possimus quibusdam praesentium consequuntur. Vitae deserunt, nobis exercitationem ullam similique quia tempore eveniet ipsum eos inventore, incidunt vel et asperiores nihil suscipit hic amet consectetur. Velit, modi aperiam.';

export default class MediaList extends Component {
  render() {
    return (
      <section className="App">
        <h1>People List</h1>
        <div className="list__container">
          <ul className="card__list">
            <li>
              <MediaCard name="Alex Guerrero" date="Lunes 26 de junio de 2017" image={profileImage} description={text} likes={37} heartFill={false} />
            </li>
            <li>
              <MediaCard name="Megan" date="Miercoles 28 de junio de 2017" image="https://i.dlpng.com/static/png/1449161_thumb.png" description={text} likes={100} heartFill={true} />
            </li>
            <li>
              <MediaCard name="Aia" date="Domingo 25 de junio de 2017" image="https://www.bemanistyle.com/wp-content/uploads/2018/01/Linux-Avatar-300px.png" description={text} likes={9} heartFill={false} />
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

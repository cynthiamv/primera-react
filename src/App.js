import React from 'react';
import './styles/App.css';
import Tarjeta from './components/Tarjeta';
import sillon from './assets/image.jpg';
import mesa from './assets/image-2.jpg';
import armchair from './assets/image-3.jpg';
import sidetable from './assets/image-4.jpg';

const App = () => {
  return (
    <div className="main">
      <Tarjeta name="Coombes" category="Lounge" price="$2600" imagen={sillon}/>
      <Tarjeta name="Keeve Set" category="Table and chairs" price="$590" imagen={mesa} />
      <Tarjeta name="Nillé" category="Armchair" price="$950" imagen={armchair} />
      <Tarjeta name="Blanko" category="sidetable" price="$90" imagen={sidetable} />
    </div>
  );
}

export default App;

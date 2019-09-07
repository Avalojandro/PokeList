import React from 'react';
import sprites from '../sprites.png';
import './styles/Cells.css';
import '../../node_modules/nes.css/css/nes.css';

const PokeCell = ({pokeClass, handleOnClick}) => {
  const {id,backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
  return <fragment>
    <button onClick = {() => handleOnClick (id)} style={style} className="poke-cell nes-btn"/>
    <br/><br/>
        </fragment>
};

export default PokeCell;
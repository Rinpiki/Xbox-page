import React from 'react';
import one from '../imgs/games/onegame.png';
import two from '../imgs/games/twogame.png';
import three from '../imgs/games/threegame.png';
import four from '../imgs/games/fourgame.png';

function SectionImg() {
  return (
    <div className="flex flex-col space-y-8">
      <img src={one} alt="imagem de jogo farcry" />
      <img src={two} alt="imagem de jogo farcry" />
      <img src={three} alt="imagem de jogo farcry" />
      <img src={four} alt="imagem de jogo farcry" />
    </div>
  );
}

export default SectionImg;

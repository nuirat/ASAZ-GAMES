import React from 'react'
import GameCard from './GameCard';
import '../styles/Landing.css';


export default function Landing() {
  return (
    <div className='landing'>
      <h1>games</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolores.</p>
      <div className='games-container'>
          <GameCard />
          <GameCard />
          <GameCard />
      </div>
    </div>
  )
}

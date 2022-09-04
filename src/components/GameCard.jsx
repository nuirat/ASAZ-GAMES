import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/GameCard.css'

export default function GameCard() {
  return (
    <div className='game-card'>
        <div className='game-img'>
            <img alt='game' width='100%' height='100%' src='https://img.freepik.com/free-vector/joystick-game-sport-technology_138676-2045.jpg?w=2000'></img>
        </div>
        <div className='game-header'>
            <h2>game1</h2>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <Link to='/game'>Go to the game</Link>
        </div>
    </div>
  )
}

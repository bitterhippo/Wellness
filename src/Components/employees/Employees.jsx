import React from 'react';
import styles from './Employees.css'

function Employees(props) {
  return (
    <div className='employees'>
      <article>
        <img className='portrait' src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/heroes/dazzle_vert.jpg?v=6186722' />
        <div className='text'>
          <h2>Dazzle</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </article>
      <article>
      <img className='portrait' src='https://orcz.com/images/thumb/f/fc/Dota2witchdoctro.jpg/400px-Dota2witchdoctro.jpg' />
        <div className='text'>
          <h2>Zharvakko</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </article>
    </div>
  )
}

export default Employees;
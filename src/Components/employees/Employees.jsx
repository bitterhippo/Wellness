import React from 'react';
import styles from './Employees.css'

function Employees(props) {
  return (
    <div className='employees'>
      <article>
        <img className='portrait' src='https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80' />
        <div className='text'>
          <h2>Dr. Doctor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </article>
      <article>
      <img className='portrait' src='https://images.unsplash.com/photo-1594658979472-b3d920f2eb3a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' />
        <div className='text'>
          <h2>Ben Dover</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>
      </article>
    </div>
  )
}

export default Employees;
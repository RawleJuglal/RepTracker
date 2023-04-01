import React from 'react'
import './Home.css'

export default function Home() {
 

  return (
    <div className="--home-page-container pad-wrapper">
      <img className='--home-img' src="src/assets/Fitness.png" alt="app logo" />
      <p className='--home-tagline'>Science-backed workouts that get better as you do</p>
      <p className='--home-desc'>By studying your strength & training ability, past workouts and gym setup, Fit Tracker creates workouts tailored to you.</p>
      <button className='--home-get-started-btn btn'>Get Started</button>
      <button className='--home-login-btn btn'>Log in</button>
    </div>
  )
}

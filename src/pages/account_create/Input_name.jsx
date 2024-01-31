import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import './account.css'
import { Link } from 'react-router-dom';

const Input_name = () => {
  return (
    <div className='Input_name'>
       <nav className='nav2'>
           <div><h1>ChooseLyf</h1></div>
        </nav>
        <section >
          <div className="input_name_container">
            <div className='input_name_container1'>
              <h3>What's your first name?</h3>
              <p>We're happy you're here.</p>
              <p>Lets get to know a little about you.</p>
              <input className='first_name' placeholder='First Name'  type="text" />
            </div>
            <div className="btns_container">
              <button>BACK</button>
              
                <button><Link to="/account/create/goals">NEXT</Link></button>
              
            </div>
          </div>
        </section>
    </div>
  )
}

export default Input_name;
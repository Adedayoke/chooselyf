import { faChevronRight, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import React from 'react';
import hero_phone_large from "../images/hero-phone-large.webp";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='Home'>
        <nav>
           <div className='Logo'><h1>ChooseLyf</h1></div>
           <div className="user-icon">
           <FontAwesomeIcon style={{"color":'blue'}} icon={faUser} />
           </div>
        </nav>
        <header>
            <div >
                <p>#1 Nutrition tracking app.</p>
                <p className='text-lg'><strong>Reach your goals</strong> <br /> with ChooseLyf</p>
                <p>Build healthy habits with the all-in-one food, exercize, and calorie tracker.</p>
                <Link to="/account/create/input_name"><button className='btn1'>START TODAY <FontAwesomeIcon icon={faChevronRight} /></button></Link>
            </div>
            <div>
                <img className='hero_phone_large' src={hero_phone_large} alt="" />
            </div>
        </header>
        <section className='how_it_works'>
          <div className="how_it_works_grid">
            <div className='col col_text col_text_odd'>
              <h1>1</h1>
              <h2>Track Food & Fitness</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='col'>
              <img src={hero_phone_large} alt="" />
            </div>

            <div className='col'><img src={hero_phone_large} alt="" /></div>
            <div className='col col_text '>
            <h1>2</h1>
              <h2>Learn What Works</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className='col col_text col_text_odd'>
            <h1>3</h1>
              <h2>Change your habits and reach your goals</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='col'><img src={hero_phone_large} alt="" /></div>

          </div>
        </section>
        <footer>
          <div className="ft_container">
            <div className='ft_left'>
              <h1>ChooseLyf</h1>
              <p>Find your healthy and your happy.</p>
              <Link to="/account/create/input_name"><button className='btn1'>START TODAY <FontAwesomeIcon icon={faChevronRight} /></button></Link>
            </div>
            <div className='ft_right'>
              <ul>
                <li><strong>Product</strong></li>
                <li>Food</li>
                <li>Exercise</li>
                <li>Apps</li>
                <li>Premium</li>
              </ul>
              <ul>
                <li><strong>Resources</strong></li>
                <li>Community</li>
                <li>Contact Us</li>
                <li>Support Center</li>
              </ul>
              <ul>
                <li><strong>Company</strong></li>
                <li>About Us</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className='ft_bottom'></div>
        </footer>
    </div>
  )
}

export default Home
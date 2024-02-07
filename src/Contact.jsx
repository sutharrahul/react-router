import React from 'react';
import logo from './Icons/Logo.svg';
import facebook from './Icons/facebook.svg';
import instagram from './Icons/instagram.svg';
import twitter from './Icons/twitter.svg';

const Contact = () => {
  return (
    <footer>
         <div className="footer_option-logo">
            <div>
                <img src={logo} alt="logo"/>
                <p className="footer_play">Play lots of games here and <br/>subscribe right away</p>
            <div className="social_media">
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={twitter} alt="twitter"/>
            </div>
            </div>
        </div>
        <div className="footer_option">
            <h6>Articles</h6>
            <ul>
                <li>Crowfunding</li>
                <li>Website donation</li>
                <li>Carreers</li>
                <li>Evet rigistrations</li>
                <li>Newsrooms</li>
            </ul>
        </div>
        <div className="footer_option">
            <h6>Leagues</h6>
            <ul>
                <li>Our story</li>
                <li>Comunity driven</li>
                <li>Our custemer</li>
                <li>Expert support</li>
            </ul>
        </div>
        <div className="footer_option">
            <h6>Team</h6>
            <ul>
                <li>About us</li>
                <li>FAQ</li>
                <li>Privacy & Policy</li>
                <li>Help</li>
            </ul>
        </div>
        <div className="footer_option">
            <h6>Get in touch</h6>
            <ul>
                <li>(704)555-0127</li>
            </ul>
        </div>
    </footer>
  )
}

export default Contact
import React from "react";
import playButton from  './Icons/playButton.svg';
import dash from './Icons/dash.svg'
import rightArrow from './Icons/rightArrow.svg'

const Body = () => {
  return <div className="container">
    <div className="top-banner">
  <div className="play_game">
      <h1>Play Game Everytime Always Be Winner And Strong</h1>
      <p>Improve your gamming skills by playing games that are currently popular so that you don't go out of style improve skills</p>
   
          <button className="Get-started">Get started</button>
          <button className="Learn-more">Learn more</button>    
     
  </div>
  <div className="play-btn">
      <div>
          <img src={playButton} alt="playButton"/>
      </div>
      <div className="play_btn-container">
          <img src={dash} alt="dash"/>
          <p className="play_btn-king">The King Of Terania <br/> And Last Seasion <br/> XXIV</p>
          <img className="rightArrow" src={rightArrow} alt="rightArrow"/>
      </div>
  </div>
</div>;
  </div>
};

export default Body;

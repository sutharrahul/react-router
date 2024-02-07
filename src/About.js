import React from "react";
import soilder_img from './Photos/image 2.png';
import startrr from './Icons/Star 1.svg';
import Wariors_img from './Photos/image 4.png';
import pubjiken_img from './Photos/image 3.png';
import garela_img from './Photos/Rectangle 56.png';

const About = () => {
  return <>
  <div className="games">
        <h1>The Most Popular Game About Fighting And Wars</h1>
        <div className="type_of_games">
            <div className="game-character_banner">
                <img className="soilder_img" src={soilder_img} alt="soilder_img"/>
                
                <div>
                    <div className="solder_game">
                        <div className="soldier-War">
                            <p className="the-war">The Soldier War</p>
                            <p className="action">Actions</p>
                        <div>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            </div>
                        </div>
                        <button className="download">Download</button>
                    </div>
                </div>
            </div>
            <div className="game-character_banner">
                <img className="Wariors_img" src={Wariors_img} alt="soilder_img"/>
                <div>
                    <div className="solder_game">
                        <div className="soldier-War">
                            <p className="the-war">The Wariors IX</p>
                            <p className="action">Actions</p>
                        <div>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                        </div>
                        </div>
                        <button className="download">Download</button>
                    </div>
                </div>
            </div>
            <div className="game-character_banner">
                <img className="pubjiken_img" src={pubjiken_img} alt="pubjiken_img"/>
                <div>
                    <div className="solder_game">
                        <div className="soldier-War">
                            <p className="the-war">Pubjiken Dak</p>
                            <p className="action">Actions</p>
                        <div>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                        </div>
                        </div>
                        <button className="download">Download</button>
                    </div>
                </div>
            </div>
            <div className="game-character_banner">
                <img className="garela_img" src={garela_img}alt="garela_img"/>
                <div>
                    <div className="solder_game">
                        <div className="soldier-War">
                            <p className="the-war">Garela Menihem</p>
                            <p className="action">Actions</p>
                        <div>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                            <img src={startrr} alt="soilder_img"/>
                        </div>
                        </div>
                        <button className="download">Download</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>;
};

export default About;

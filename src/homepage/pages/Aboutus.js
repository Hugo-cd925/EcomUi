import React from "react";
import './Aboutus.css';

const Aboutus = () => {
    return (
        <>
          <img className="baseimg" src="Homepage_img.jpg" alt="Homepage_img"/>
            <h1 className="aboutus-title">About Us</h1>
         
<div className="team-list">
                <div className="team">
                    <div className="team_member">
                        <div className="team-img">
                            {/* <img src="profile_pic.png" alt="team-img"></img> */}
                        </div>
                        <h3>Isaiah Blue Lipscomb</h3>
                        <p className="role">GenSpark Trainee</p>
                        <p>Technical Skills: C#, React, Javascript, CSS, HTML </p>
                    </div>
                    <div className="team_member">
                    <div className="team-img">
                            {/* <img src="profile_pic.png" alt="team-img"></img> */}
                        </div>
                    <h3>Raul Boulocq</h3>
                        <p className="role">GenSpark Trainee</p>
                        <p>Technical Skills: C#, React, Javascript, CSS, HTML</p>
                    </div>
                    <div className="team_member">
                    <div className="team-img">
                            {/* <img src="profile_pic.png" alt="team-img"></img> */}
                        </div>
                    <h3>Hugo Calderon</h3>
                        <p className="role">GenSpark Trainee</p>
                        <p>Technical Skills: C#, React, Javascript, CSS, HTML</p>
                    </div>
                    <div className="team_member">
                    <div className="team-img">
                            {/* <img src="profile_pic.png" alt="team-img"></img> */}
                        </div>
                    <h3>Saber Butt</h3>
                        <p className="role">GenSpark Trainee</p>
                        <p>Technical Skills: C#, React, Javascript, CSS, HTML</p>
                    </div>
                </div>
                </div>

        </>
        
    );
}


export default Aboutus
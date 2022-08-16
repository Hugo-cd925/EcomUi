import React from "react";
import './Aboutus.css';

const Aboutus = () => {
    return (
        <>
       <div className="aboutus-wrapper">
        {/* <img src="Homepage_img.jpg" alt="Homepage_img"></img> */}
       <h1>About Us</h1>
      
       <div className="team">
        <div className="team_member">
            <h3>Isaiah Blue Lipscomb</h3>
            <p className="role">GenSpark Trainee</p>
            <p>Skills: C#, CSS, HTML, Javascript, React, Visual Studio, Visual Studio Code, SQL, Azure</p>
        </div>
        <div className="team_member">
            <h3>Hugo Calderon</h3>
            <p className="role">GenSpark Trainee</p>
            <p>description</p>
        </div>
        <div className="team_member">
            <h3>Raul Boulocq</h3>
            <p className="role">GenSpark Trainee</p>
            <p>description</p>
        </div>
        <div className="team_member">
            <h3>Saber Butt</h3>
            <p className="role">GenSpark Trainee</p>
            <p>description</p>
        </div>
       </div>
       </div>
        </>
        
    );
}


export default Aboutus
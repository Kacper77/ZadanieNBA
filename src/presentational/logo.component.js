import React from 'react';
import './logo.css';

const TeamLogo = (props) => (
    <div className="team-logo-wrapper">
        <img className="team-logo" src={props.team.imageUrl} alt={props.team.name}/>
    </div>
);

export default TeamLogo;
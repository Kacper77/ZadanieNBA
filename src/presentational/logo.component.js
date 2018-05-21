import React from 'react';
import './logo.css';

const TeamLogo = (props) => (
    <div className="team-logo-wrapper">
        <img className="team-logo" src={props.team.imageUrl} alt="photo" />
    </div>
);

export default TeamLogo;
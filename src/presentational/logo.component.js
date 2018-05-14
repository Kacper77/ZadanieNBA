import React from 'react';

const TeamLogo = (props) => (
    <div className="team-logo-wrapper">
        <img className="team-logo" src={props.team.imageUrl} alt="photo" />
    </div>
);

export default TeamLogo;
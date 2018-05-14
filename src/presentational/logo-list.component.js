import React from 'react';
import { Link } from 'react-router';
import TeamLogo from '../presentational/logo.component';

const TeamLogoList = (props) => (
    <div className="teams-list">
        {props.teams.map(team => {
            return (
                <div className="single-team" key={team.id}>
                    <Link className='logo' to={'teams/team/' + team.id}>
                        <TeamLogo team={team} />
                    </Link>
                    <button onClick={props.deleteTeam.bind(null, team.id)}>DELETE</button>
                </div>
            )
        })}
    </div>
);

export default TeamLogoList;
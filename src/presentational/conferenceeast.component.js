import React from 'react';
import { Link } from 'react-router';
import TeamLogo from '../presentational/logo.component';

const ConferenceEast = (props) => (
    <div className='conference'>
        {props.conference.map(team =>{
        return(
            <div className="single-team" key={team.id}> 
                <Link className='logo' to={'teams/team/' + team.id}>
                    <TeamLogo team={team} />
                </Link>
            </div>
            )
        })}
    </div>
)

export default ConferenceEast;
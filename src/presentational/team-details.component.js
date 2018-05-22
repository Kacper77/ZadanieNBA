import React from 'react';
import "./team-details.css";

const CountryDetails = (props) => (
    <div className="team-wrapper">
        <header>
            <img className="team-photo" src={props.team.imageUrl} alt="photo" />
        </header>
        <div className="team-info">
            <h1>{props.team.name}</h1>
            <h2>{props.team.conference}</h2>
            <h2>{props.team.division}</h2>

            <div className="info">
                <div>
                    <span> Hala: </span>
                    <span>{props.team.arena}</span>
                </div>

                <div>
                    <span> Trener: </span>
                    <span>{props.team.head_coach}</span>
                </div>

                <div>
                    <span> Mistrzostwo NBA: </span>
                    <span>{props.team.championships}</span>
                </div>

                <div>
                    <span> Mistrzostwo Konferencji: </span>
                    <span>{props.team.conference_titles}</span>
                </div>

                <div>
                    <span> Zastrzeżone numery: </span>
                    <span>{props.team.retired_numbers}</span>
                </div>

                <div>
                    <span>Strona zespołu: </span>
                    <a href={props.team.website}>tu jest link</a>
                </div>
            </div>
        </div>
    </div>
);

export default CountryDetails;
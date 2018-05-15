import React from 'react';

const CountryDetails = (props) => (
    <div className="team-wrapper">
        <header>
            <img className="team-photo" src={props.team.imageUrl} alt="photo" />
        </header>
        <div className="team-info">
            <h1>{props.team.name}</h1>
            <h2>Conference: {props.team.conference}</h2>
            <h2>Division: {props.team.division}</h2>

            <div className="info">
                <div>
                    <span>{props.team.arena}</span>
                    <span>Hala</span>
                </div>

                <div>
                    <span>{props.team.head_coach}</span>
                    <span>Trener</span>
                </div>

                <div>
                    <span>{props.team.championships}</span>
                    <span>Mistrzostwo NBA</span>
                </div>

                <div>
                    <span>{props.team.conference_titles}</span>
                    <span>Mistrzostwo Konferencji</span>
                </div>

                <div>
                    <span>{props.team.retired_numbers}</span>
                    <span>Zastrzeżone numery</span>
                </div>

                <div>
                    <span>{props.team.website}</span>
                    <span>Strona zespołu</span>
                </div>
            </div>
        </div>
    </div>
);

export default CountryDetails;
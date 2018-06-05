import React from "react";
import "./logo-list.css";
import Conference from "./conference.component";

const TeamLogoList = props => {
    const WestConference = props.teams.filter(
        team => team.conference === "Western"
    );
    const EastConference = props.teams.filter(
        team => team.conference === "Eastern"
    );
    return (
        <div className="teams-list">
      <Conference conference={WestConference} />{" "}
      <Conference conference={EastConference} />{" "}
    </div>
    );
};
export default TeamLogoList;
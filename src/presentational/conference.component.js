import React from "react";
import { Link } from "react-router";
import TeamLogo from "../presentational/logo.component";

const divisions = [
    "Northwest",
    "Southwest",
    "Pacific",
    "Atlantic",
    "Central",
    "Southeast"
];
const Conference = props => (
    <div className="conference">
    {" "}
    {divisions.map(division => {
      const teams = props.conference.filter(team => division === team.division);
      if (teams.length === 0) {
        return null;
      }
      const divisionteams = teams.map(team => {
        return (
          <div className="single-team" key={team.id}>
            <Link className="logo" to={"teams/team/" + team.id}>
              <TeamLogo team={team} />{" "}
            </Link>{" "}
          </div>
        );
      });
      return (
        <div className="division">
          <h3> {division} </h3> {divisionteams}{" "}
        </div>
      );
    })}{" "}
  </div>
);

export default Conference;
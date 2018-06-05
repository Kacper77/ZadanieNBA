import React, { Component } from 'react';
import { connect } from 'react-redux';
import TeamLogoList from '../presentational/logo-list.component';
import { searchTeam } from '../actions/actions-teams';

class TeamLogoContainer extends Component {

    componentDidMount() {
        this.props.dispatch(searchTeam(''));
    }

    search(event) {
        this.props.dispatch(searchTeam(event.target.value));
    }

    render() {
        return ( <
            div >
            <
            div className = "search text-center" >
            <
            input type = "text"
            placeholder = "find team"
            onChange = { this.search.bind(this) }
            /> < /
            div > <
            TeamLogoList teams = { this.props.teams }
            /> < /
            div >
        )
    }
}

const mapStateToProps = function(store) {
    return {
        teams: store.teamsReducer.visibleTeams
    };
};

export default connect(mapStateToProps)(TeamLogoContainer);
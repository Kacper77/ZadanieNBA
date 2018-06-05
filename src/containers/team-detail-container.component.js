import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTeam } from '../actions/actions-teams';
import TeamDetails from '../presentational/team-details.component';

class TeamDetailsContainer extends Component {

    componentDidMount() {
        this.props.dispatch(getTeam(this.props.params.id));
    }

    render() {
        return ( <
            TeamDetails team = { this.props.selectedTeam }
            />
        )
    }
}

const mapStateToProps = function(store) {
    return {
        selectedTeam: store.teamsReducer.selectedTeam
    };
};

export default connect(mapStateToProps)(TeamDetailsContainer);
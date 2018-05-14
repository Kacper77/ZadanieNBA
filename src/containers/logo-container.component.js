import React, { Component } from 'react';
import { connect } from 'react-redux';
import TeamLogoList from '../presentational/logo-list.component';
import { getTeams, searchTeams, deleteTeam } from '../actions/actions-teams';

class TeamLogoContainer extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(getTeams());
        this.props.dispatch(searchTeams(''));
    }

    search(event) {
        this.props.dispatch(searchTeams(event.target.value));
    }

    deleteTeam(id) {
        this.props.dispatch(deleteTeam(id));
    }

    render() {
        return (
            <div>
                <div className="search text-center">
                    <input type="text" onChange={this.search.bind(this)}/>
                </div>
                <TeamLogoList teams={this.props.teams} />
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        teams: store.teamsReducer.teams,
        visibleTeams: store.teamsReducer.visibleTeams
    };
};

export default connect(mapStateToProps)(TeamLogoContainer);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setConference } from '../actions/actions-teams';
import TeamLogoList from '../presentational/logo-list.component';

class ConferencesContainer extends Component {
    constructor(props) {
        super(props);
    }

    chooseConference(event) {
        this.props.dispatch(setConference(event.target.value))
    }

    componentDidMount() {
        this.props.dispatch(setConference('Zachód'));
    }

    render() {
        return (
            <div>
                <select onChange={e => this.chooseConference(e)}>
                    <option value="Western">Zachód</option>
                    <option value="Eastern">Wschód</option>
                </select>
                <TeamLogoList teams={this.props.visibleTeams} deleteTeam={this.deleteTeam.bind(this)} />
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        visibleTeams: store.teamsReducer.visibleTeams
    };
};

export default connect(mapStateToProps)(ConferencesContainer);
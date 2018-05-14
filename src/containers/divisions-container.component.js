import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setDivision, deleteTeam } from '../actions/actions-teams';
import TeamLogoList from '../presentational/logo-list.component';

class DivisionsContainer extends Component {
    constructor(props) {
        super(props);
    }

    chooseDivision(event) {
        this.props.dispatch(setDivision(event.target.value))
    }

    deleteTeam(id) {
        this.props.dispatch(deleteTeam(id));
    }

    componentDidMount() {
        this.props.dispatch(setDivision('Northwest'));
    }

    render() {
        return (
            <div>
                <select onChange={e => this.chooseDivision(e)}>
                    <option value="Northwewst">Północny Zachód</option>
                    <option value="Southwest">Południowy Zachód</option>
                    <option value="Pacific">Pacyfik</option>
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

export default connect(mapStateToProps)(DivisionsContainer);
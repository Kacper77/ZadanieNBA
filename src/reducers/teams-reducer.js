import { GET_TEAMS, GET_TEAM, SEARCH_TEAMS, DELETE_TEAM, SET_CONFERENCE, SET_DIVISION } from '../actions/actions-teams';
import teamsData from '../data/teams.json';

const initialState = {
    teams: teamsData,
    selectedTeam: {},
    visibleTeams: teamsData
};

const teamsReducer = function(state = initialState, action) {
    switch (action.type) {
        case GET_TEAMS:
            return Object.assign({}, state, { teams: state.teams });

        case GET_TEAM:
            const selectedTeam = state.teams.find(team => team.id == action.id);
            return Object.assign({}, state, { selectedTeam });

        case SEARCH_TEAMS:
            const foundTeams = state.teams.filter(team => team.name.toLowerCase().includes(action.searchText.toLowerCase()));
            return Object.assign({}, state, { visibleTeams: foundTeams });

        case DELETE_TEAM:
            const notDeletedTeams = state.teams.filter(team => team.id != action.id);
            const notDeletedVisibleTeams = state.visibleTeams.filter(team => team.id != action.id);
            return Object.assign({}, state, { teams: notDeletedTeams, visibleTeams: notDeletedVisibleTeams });

        case SET_CONFERENCE:
            const conferenceTeams = state.teams.filter(team => team.conference === action.name);
            return Object.assign({}, state, { visibleTeams: conferenceTeams });

        case SET_DIVISION:
            const divisionTeams = state.teams.filter(team => team.division === action.name);
            return Object.assign({}, state, { visibleTeams: divisionTeams });
    }

    return state;
};

export default teamsReducer;
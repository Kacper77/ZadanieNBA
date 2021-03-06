export const GET_TEAM = 'GET_TEAM';
export const SEARCH_TEAM = 'SEARCH_TEAM';
export const SET_CONFERENCE = 'SET_CONFERENCE';
export const SET_DIVISION = 'SET_DIVISION';

export function getTeam(id) {
    return {
        type: GET_TEAM,
        id
    }
}

export function searchTeam(searchText) {
    return {
        type: SEARCH_TEAM,
        searchText
    }
}

export function setConference(name) {
    return {
        type: SET_CONFERENCE,
        name
    }
}

export function setDivision(name) {
    return {
        type: SET_DIVISION,
        name
    }
}
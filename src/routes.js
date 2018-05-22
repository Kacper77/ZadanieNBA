import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import TeamLogoContainer from './containers/logo-container.component';
import TeamDetailsContainer from './containers/team-detail-container.component';
import ConferencesContainer from './containers/conferences-container.component';




export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='teams'>
        	<IndexRoute component={TeamLogoContainer}/>
            <Route path='team/:id' component={TeamDetailsContainer}/>
        </Route>
        <Route path='conferences' component={ConferencesContainer}/>
        <Route path='contact' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);
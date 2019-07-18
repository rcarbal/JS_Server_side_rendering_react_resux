import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './actions'

const App = ({ route }) => {
    return (
        <div>
            <Header />
            {renderRoutes(route.routes)}
        </div>
    );
};

// The dispatch function is being destructured off the Redux store.
export default {
    component: App,
    loadData: ({ dispatch }) =>{
        return dispatch(fetchCurrentUser())
    }
}
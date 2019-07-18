import React from 'react';
import { Link } from 'react-router-dom';
import  { connect } from 'react-redux';

const Header = ({ auth }) => {
    console.log('My auth status is ', auth);
    return (<div>
        <Link to="/">React SSR</Link>
    </div>
    );
};

// auth is being destrucured off the state
function mapStateToPros({ auth }){
    return { auth };
}

export default connect(mapStateToPros)(Header);
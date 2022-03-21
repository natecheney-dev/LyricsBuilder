import React from 'react';
import '../index.css';

function Nav() {
    return (
        <div className='Nav'>
            <a href='/songs'>Songs</a>
            <a href='/addsong'>Add Song</a>
        </div>
    );
}

export default Nav;
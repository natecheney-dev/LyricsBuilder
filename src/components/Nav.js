import React from 'react';
import './lyrics.css';

function Nav() {
    return (
        <div className='Nav'>
            <div className='Hrefs'>
                <a href='/songs'>Songs</a>
                <a href='/addsong'>Add Song</a>
            </div>
        </div>
    );
}

export default Nav;
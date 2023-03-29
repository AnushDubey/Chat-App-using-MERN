import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>CS384 Project 1</h1>
      <h2>Real Time Chat Application</h2>
      <h2>By Anush (2001ME11) & Chetan (2001ME16) </h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Users that are online:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
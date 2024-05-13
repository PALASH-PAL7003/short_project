import './Navbar.css';
import React from 'react';
export default function Navbar(props) {
  return (
    <div className='navbar'>
          <ul>
          <li>{props.home}</li>
          <li>{props.Contact}</li>
        </ul>
    </div>
  );
}

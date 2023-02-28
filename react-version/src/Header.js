import React from 'react';
import './App.css';

export default function Header(props) {
    console.log('Las props son: ${JSON.stingify(props}')
  return (
    <div>
      <h1 className='titulo'>{props.titulo}</h1>
    </div>
  );
}
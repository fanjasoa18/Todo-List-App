import React from 'react';
import Check from '../image/checkList.png';

export default function Header() {

  return (
    <div className='header'>
        <h3 className='title'>ToDo List App</h3>
        <img src={Check} className="check-img" alt=""/>
    </div>
  )
}

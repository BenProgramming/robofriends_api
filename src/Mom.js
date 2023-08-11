import React, { Component } from 'react';
import './Mom.css';

const Mom = (props) => {
  return (
    <div>
      <h2>Your Mom is nice </h2>
      <p>Especially last night</p>
      <p>{props.nameOfMom}</p>
    </div>
  );
}

export default Mom;
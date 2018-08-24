import React from 'react';
import './Card.css'

const Card = props => (
  <div className="Card">
        <div className ="Contents">
        <img src={props.image1} />
        <h3>{props.title}</h3>
    </div>
  </div>
)

export default Card
import React from 'react';
import '../styles/card.css';
import urgent from '../assets/SVG - Urgent Priority colour.svg';
import high from '../assets/Img - High Priority.svg';
import medium from '../assets/Img - Medium Priority.svg';
import low from '../assets/Img - Low Priority.svg';
import noPro from '../assets/No-priority.svg';

const Card = ({ card }) => {

  const priorityToImg = {
    4: urgent,    
    3: high,      
    2: medium,    
    1: low,      
    0: noPro,     
  };

  const priorityImg = priorityToImg[card['priority']] || noPro; 

  return (
    <div className="userCard">
      <div className="usNo">{card['id']}</div>
      <div className="matt">{card['title']}</div>
      <div className="iconContainer">
        <img src={priorityImg} alt="Priority Icon" className="dicon" />
        <span className="diicon">
          <span className="circle"></span>
          {card['tag'][0]}
        </span>
      </div>
    </div>
  );
};

export default Card;

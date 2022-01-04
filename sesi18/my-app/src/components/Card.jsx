import React from 'react';
import cardStyle from './styles/Card.module.css';
// import './styles/card.css';

// const cardStyle = {
//   backgroundColor: '#777',
//   marginBottom: '1em',
//   padding: '0.5em 1em',
//   borderRadius: '2em',
// };

const Card = (props) => {
  return (
    <div className={cardStyle.card}>
      <div>
        <h3>{props.title}</h3> by {props.userId}
      </div>
      <div>{props.completed ? 'Completed' : 'Pending'}</div>
    </div>
  );
};

export default Card;

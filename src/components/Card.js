import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='card grow br3 pa3 ma2 dib'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='' />
      <div>
        <h2>{name}</h2>
        <p>{email.toLowerCase()}</p>
      </div>
    </div>
  );
}

export default Card;
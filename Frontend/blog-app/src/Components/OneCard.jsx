import React from 'react';
import './OneCard.css';

const OneCard = ({ image, name, description }) => {
  return (
    <div className="profile-card" onClcik={()=>{}}>
      <div className="profile-header">
        <img src={image} alt={name} className="profile-image" />
        <h3 className="profile-name">{name}</h3>
      </div>
      <div>
        <p className="profile-description">{description}</p>
      </div>
    </div>
  );
};

export default OneCard;

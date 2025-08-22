import React, { useState } from 'react';
import './Header.css';
import image from '../assets/LogoLicious_20200619_211635.jpg'


const Header = () => {
  const [topic, setTopic] = useState('Konnasema');
  const [description, setDescription] = useState(
    'This is a really long description that goes on and on and you should only see the beginning until you click See more. The rest of this text is hidden until you expand it to read the full description in a floating modal.'
);
  const [createdBy, setCreatedBy] = useState('KL Rahul');

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="topic-creation">
          <dl className="topic-details">
            <div className="detail-row">
              <dt>Name:</dt>
              <dd>{topic}</dd>
            </div>
            <div className="detail-row">
              <dt>Description:</dt>
              <dd>
                <span className="description-truncate">
                  {description}
                </span>
                {description.length > 180 && (
                  <button
                    className="see-more-button"
                    onClick={() => setIsModalOpen(true)}
                  >
                    See more
                  </button>
                )}
              </dd>
            </div>
            <div className="detail-row">
              <dt>Created By:</dt>
              <dd>{createdBy}</dd>
            </div>
          </dl>
        </div>
        <div className="topic-banner">
          <img src={image} />
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Full Description</h3>
            <p>{description}</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

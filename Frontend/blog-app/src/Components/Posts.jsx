// src/Components/Posts.js

import React from 'react';
import OneCard from './OneCard';
import profilepic from '../assets/blank-profile-picture-973460_1280.png';
import './Posts.css'; // if you want to style the grid

const Posts = () => {
  const data = [
    { name: "Rakesh", description: `Tell me the truth Loves painting and poetry Loves painting and poetryTelugu Titans is a
         professional kabaddi team based in Hyderabad, India, that competes in the Pro Kabaddi League 
         (PKL). Founded in 2014, the team represents the Telugu-speaking region of India. They are owned by
          Veera Sports and play their home matches at the G. M. C. Balayogi SATS Indoor Stadium.
          Tell me the truth Loves painting and poetry Loves painting and poetryTelugu Titans is a professional kabaddi team based in Hyderabad, India, that competes in the Pro Kabaddi League (PKL). Founded in 2014, the team represents the Telugu-speaking region of India.
           They are owned by Veera Sports and play their home matches at the G. M. C. Balayogi SATS Indoor Stadium. `, image: 
          profilepic },
    { name: "Priya", description: "Loves painting and poetry", image: profilepic },
    { name: "Arjun", description: "Software Engineer", image: profilepic },
    { name: "Nisha", description: "Traveler and foodie", image: profilepic },
    { name: "Dev", description: "Tech enthusiast", image: profilepic },
    { name: "Anjali", description: "Yoga instructor", image: profilepic },
    { name: "Meera", description: "Loves gardening", image: profilepic },
    { name: "Amit", description: "AI researcher", image: profilepic },
     { name: "Priya", description: "Loves painting and poetry", image: profilepic },
    { name: "Arjun", description: "Software Engineer", image: profilepic },
    { name: "Nisha", description: "Traveler and foodie", image: profilepic },
    { name: "Dev", description: "Tech enthusiast", image: profilepic },
    { name: "Anjali", description: "Yoga instructor", image: profilepic },
    { name: "Meera", description: "Loves gardening", image: profilepic },
    { name: "Amit", description: "AI researcher", image: profilepic },
     { name: "Arjun", description: "Software Engineer", image: profilepic },
    { name: "Nisha", description: "Traveler and foodie", image: profilepic },
    { name: "Dev", description: "Tech enthusiast", image: profilepic },
    { name: "Anjali", description: "Yoga instructor", image: profilepic },
    { name: "Meera", description: "Loves gardening", image: profilepic },
    { name: "Amit", description: "AI researcher", image: profilepic },
  ];

  return (
    <div className="posts-grid">
      {data.map((item, index) => (
        <OneCard
          key={index}
          image={item.image}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Posts;

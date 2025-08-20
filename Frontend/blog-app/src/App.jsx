import './App.css'
import { IoIosSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import {useState} from 'react';
import AddTopic from './components/add-topic/add-topic';

const App = () => {
  const [showProfile,updateShowProfile] = useState(false);
  const changeShowProfile = () => {
      updateShowProfile(prev => !prev);
  }
  return (
    <div className='open-page-container'>
      <div className="flex justify-between bg-[#3a5a78] px-7 h-20">
        <img src="https://img.freepik.com/premium-vector/minimalist-trending-topic-banner-isolated-white-background-vector-illustration_567423-499.jpg" alt="Logo" className='h-15 w-30 logo-image'/>
        <div className='flex'>
          <div className='profile-image-and-edit-container'>
            <button className='profile-image-button' onClick={changeShowProfile}>
              <img src='https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png' className='profile-image h-15 w-15'/>
            </button>
            {showProfile && <ul className='edit-profile-list-container'>
              <li className='edit-profile-list-item'>Edit Profile</li>
              <hr />
              <li className='edit-profile-list-item'>View Profile</li>
            </ul>}
          </div>
          <button className='logout-button'>
          <MdLogout className='logout-icon'/>
          </button>
        </div>
      </div>
      <div className='main-page-middle-container'>
        <h1 className='head'>Topic</h1>
        <div className='home-page-input-container'>
        <input type='text' className='home-page-input' placeholder="Search"/>
        <button className='search-icon-button'>
            <IoIosSearch className='search-icon-image'/>
        </button>
        </div>
        <div className='trending-list'>
          <p>AI</p>
          <p>Politics</p>
          <p>Quantum Computing</p>
        </div>
      </div>
    </div>
  )
}

export default App;
import React from 'react';
import { Outlet } from 'react-router-dom';
import './profile.css';
import Sidebar from '../../utils/sidebar/index';

export default function ProfilePage() {
  return (
    <div className="wrapper">
      <div className="profile-list">
        <Outlet />
      </div>
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

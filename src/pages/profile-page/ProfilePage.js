import React from 'react';
import { Outlet } from 'react-router-dom';

export default function ProfilePage() {
  return (
    <div className="wrapper">
      <div className="profile-list">
        <Outlet />
      </div>
      <div className="sidebar">
        <p>sidebar title</p>
      </div>
    </div>
  );
}

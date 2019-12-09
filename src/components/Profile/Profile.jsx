import React from 'react';
import profile from'./Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
    return (
      <div>
        <ProfileInfo />
        <MyPosts />
        
      </div>
    );
}

export default Profile;
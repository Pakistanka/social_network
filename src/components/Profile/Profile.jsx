import React from 'react';
import profile from'./Profile.module.scss';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div>
        <div>
          <img src="https://image.shutterstock.com/image-photo/panorama-foggy-forest-fairy-tale-260nw-1123858610.jpg" alt=""/>
        </div>
        <div>
          ava+desc
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCE9XcZRF7unwI896MbBpoo32fp21yZ-4RIApDGdSZ6e09Y_GK" alt=""/>
        </div>
        <MyPosts />
        
      </div>
    );
}

export default Profile;
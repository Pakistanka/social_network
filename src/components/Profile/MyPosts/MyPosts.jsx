import React from 'react';
import s from './MyPosts.module.scss';
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
            </div>
          
            <div className={s.posts}>
                <Post message="Hi, how are you?" like="23 likes"/>
                <Post message="Hello, I am fine." like="1 like"/>
            </div>
               
        </div>
    );
}

export default MyPosts;
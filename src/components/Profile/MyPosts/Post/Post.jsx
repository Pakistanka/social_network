import React from 'react';
import s from './Post.module.scss';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://maxst.icons8.com/vue-static/icon/collection-favorites.png" alt="icon"/>
           { props.message}
            <div>
               { props.like }
            </div>
            

        </div>
    );
}

export default Post;
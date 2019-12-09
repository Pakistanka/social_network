import React from 'react';
import p from'./ProfileInfo.module.scss';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://image.shutterstock.com/image-photo/panorama-foggy-forest-fairy-tale-260nw-1123858610.jpg" alt=""/>
            </div>
            <div className={p.descriptionBlock}>
                ava+desc
            </div>
        </div>
        
    );
}

export default ProfileInfo;
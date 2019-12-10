import React from 'react';
import d from './../Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <div className={d.dialog + ' ' + d.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}



export default DialogItem;
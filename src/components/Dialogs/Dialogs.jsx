import React from 'react';
import d from './Dialogs.module.scss';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <div className={d.dialog + ' ' + d.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={d.message}>{props.message}</div>
    );
}

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <DialogItem name="Anna" id="1"/>
                <DialogItem name="Dmitry" id="2"/>
                <DialogItem name="Nikite" id="3"/>
                <DialogItem name="Maria" id="4"/>
            </div>
            <div className={d.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="That's great"/>      
            </div>
        </div>
    );
}

export default Dialogs;
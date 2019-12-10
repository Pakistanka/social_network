import React from 'react';
import d from './Dialogs.module.scss';
import {NavLink} from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = 
        props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = 
        props.messages.map( m => <Message message={m.message} id={m.id}/>);

    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={d.messages}>
                { messagesElements }     
            </div>
        </div>
    );
}

export default Dialogs;
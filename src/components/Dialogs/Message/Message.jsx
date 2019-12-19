import React from 'react';
import d from './../Dialogs.module.scss';
// import {NavLink} from 'react-router-dom';


const Message = (props) => {

    let textMessage = React.createRef();
   
    let sendMessage = () => {
        let text = textMessage.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={d.message}>{props.message}</div>
            <div>
                <textarea cols="30" rows="10" ref={textMessage}></textarea>
            </div>
            <div>
                <button onClick={ sendMessage }>Send message</button>
            </div>
        </div> 
    );
}


export default Message;
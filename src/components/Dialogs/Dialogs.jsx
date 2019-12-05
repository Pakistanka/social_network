import React from 'react';
import d from './Dialogs.module.scss';

const Dialogs = () => {
    return (
        <div className={d.dialogs}>
            <div className={d.dialogsItems}>
                <div className={d.dialog + ' ' + d.active}>
                    Anna
                </div>
                <div className={d.dialog}>
                    Dmitry
                </div>
                <div className={d.dialog}>
                    Nikita
                </div>
                <div className={d.dialog}>
                    Maria
                </div>
            </div>
            <div className={d.messages}>
                <div className={d.message}>Hi</div>
                <div className={d.message}>How are you?</div>
                <div className={d.message}>That's great</div>         
            </div>
        </div>
    );
}

export default Dialogs;
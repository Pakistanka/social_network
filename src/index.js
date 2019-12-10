import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {íd: 1, message: 'Hi, how are you?', likesCount: 12},
    {id:2, message: 'Hello, I am fine', likesCount: 1},
    {id: 3, message: 'It\'s my first post', likesCount: 128}
];

let dialogsData = [
    { id: 1, name: 'Anna'},
    { id: 2, name: 'Dmitry'}, 
    { id: 3, name: 'Nikita'}, 
    { id: 4, name: 'Maria'},
    { id: 5, name: 'Valera '}
];

let messages = [
    {íd: 1, message: 'Hi'},
    {id:2, message: 'How are you?'},
    {id: 3, message: 'That\'s great'}
];

ReactDOM.render(<App posts={posts} dialogsData={dialogsData} messages={messages}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

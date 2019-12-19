
let state = {
    profilePage: {
        posts: [
            {íd: 1, message: 'Hi, how are you?', likesCount: 12},
            {id:2, message: 'Hello, I am fine', likesCount: 1},
            {id: 3, message: 'It\'s my first post', likesCount: 128}
        ] 
    },
    dialogsPage: {
        messages: [
            {íd: 1, message: 'Hi'},
            {id:2, message: 'How are you?'},
            {id: 3, message: 'That\'s great'}
        ],
        dialogsData: [
            { id: 1, name: 'Anna'},
            { id: 2, name: 'Dmitry'}, 
            { id: 3, name: 'Nikita'}, 
            { id: 4, name: 'Maria'},
            { id: 5, name: 'Valera '}
        ]
    }
    
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}

export default state;
    

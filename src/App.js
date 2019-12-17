import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';



const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          {/* <Route exact path="/dialogs" component={Dialogs}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/news" component={News} />
          <Route exact path="/music" component={Music} />
          <Route exact path="/settings" component={Settings}/> */}

          <Route exact path="/dialogs" 
            render={ () => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route exact path="/profile" 
            render={ () => 
              <Profile 
                state={props.state.profilePage} 
                addPost={props.addPost} /> }
          />
          <Route exact path="/news" render={ () => <News/>} />
          <Route exact path="/music" render={ () => <Music/>} />
          <Route exact path="/settings" render={ () => <Settings/>}/>
        </div>
        
      </div>
    </BrowserRouter>
  );
}


export default App;

import React from 'react';
import { useAuth } from '@frontegg/react'
import { AdminPortal } from '@frontegg/react';
import "../src/App.css"


function App() {
  const { user, isAuthenticated } = useAuth();
  const handleClick = () => {
    AdminPortal.show();
  };
  
  return (
    <div className="App">
      {isAuthenticated && (
        <div className="outterDiv"> 
        <div className = "innerContainer">
          <img src={user.profilePictureUrl} alt={user.name} className="userImg" />
          <button className="settingsButton" onClick={handleClick}>Settings</button>
        </div>
        <span className ="welcomeText"> Welcome {user.name}, it's great to see you again</span>
        </div>
      )}
    </div>
    
  );
}

export default App;
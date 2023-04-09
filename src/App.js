import React from 'react';
import Logout from './logout';
import Login from './login';
import {gapi} from 'gapi-script'
import { useEffect } from 'react';

const clientId = "25983351748-h5o6n36rh7gmq4eft49bji9itcc9qk4d.apps.googleusercontent.com"

function App() {

  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: "" 
      })
    };
    gapi.load("client:auth2",start)
  })
  return (
    <div>
      hello
      <Login />
      <Logout />
    </div>
  );
}

export default App;





// 25983351748-k4h95t1r2tulcqecqhnqpt1dokks92u5.apps.googleusercontent.com
// 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
import React from "react";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "25983351748-h5o6n36rh7gmq4eft49bji9itcc9qk4d.apps.googleusercontent.com";

function App() {
  // const onLogin = () => {
  //   dispatch(signin(loginForm, history));
  // };

  const onSuccess = (res) => {
    console.log("Login Success! Current user: ", res);
    // history.push('/')
  };

  const onFailure = (res) => {
    console.log("Login Failed!");
  };

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client: auth2", start);
  }, []);

  return (
    <div>
      {/* <button></button> */}
      <GoogleLogin
        clientId={clientId}
        buttonText="LogIn"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}

export default App;

// 25983351748-k4h95t1r2tulcqecqhnqpt1dokks92u5.apps.googleusercontent.com
// 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

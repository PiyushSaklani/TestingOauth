import {GoogleLogin} from 'react-google-login';

const clientId = "25983351748-h5o6n36rh7gmq4eft49bji9itcc9qk4d.apps.googleusercontent.com"


function Login(){

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS",res.profileObj);
    }
    const onFailure = (res) => {
        console.log("LOGIN FAILED",res);
    }
    return(
        <div id='signInButton'>
            <GoogleLogin 
            clientId={clientId}
            buttonText='LogIn'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            />
        </div>
    )
}


export default Login
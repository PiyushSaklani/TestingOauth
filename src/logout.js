import {GoogleLogin} from 'react-google-login';

const clientId = "25983351748-h5o6n36rh7gmq4eft49bji9itcc9qk4d.apps.googleusercontent.com";


function Logout(){

    const onSuccess = () => {
        console.log("Log Out Successful")
    }

    return(
        <div id='signInButton'>
            <GoogleLogin 
            clientId={clientId}
            buttonText='LogOut'
            onLogoutSuccess={onSuccess}
            />
        </div>
    )
};

export default Logout
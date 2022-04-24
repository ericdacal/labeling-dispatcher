import logo from '../../logo.svg'
import { MailOutline, LockClosedOutline, EyeOutline } from 'react-ionicons'
import { useNavigate } from "react-router-dom";
import './LoginScreen.css';
import { Auth } from 'aws-amplify';
import { useEffect } from 'react';

/*Amplify.configure({
    Auth: {
        region: 'eu-west-1',
        userPoolId: 'eu-west-1_oJQ91G9bb',
        userPoolWebClientId: '7c5vup6ea7cgf2gge5thrg59vm'
    }
});*/
  

function LoginScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    console.log('Login')
  })

  async function signIn(email, pass) {
    try {
        const cognitoUser = await Auth.signIn(email, pass)
        if(cognitoUser) {
          navigate('/home', { state : { user : email, password : pass } })
        }
    } catch (error) {
        console.log('error signing in', error)
        window.alert('User incorrect')
    }
  }
  function passRecover() {
    let mail = window.prompt("Enter your email", "");
    // Send confirmation code to user's email
    Auth.forgotPassword(mail)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
  
  function loginProcess() {
    let email =  document.getElementById('email').value
    let pass = document.getElementById('password').value
    signIn(email, pass)
  }
  function showPassword() {
    console.log('show pass')
    let pass = document.getElementById('password')
    if (pass.type === 'password') {
      pass.type = 'text'
    } else {
      pass.type = 'password'
    }
  }

  return (
    <div className="login-page">
      <div className="screen-1">
        <img className="logo" src={logo} alt="Logo" />
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <div className="sec-2">
            <MailOutline
              className="mail-logo"
              color={'#00000'} 
              title={""}
            />
            <input id="email" type="email" name="email" placeholder="Username@gmail.com"/>
          </div>
        </div>
        <div className="password">
          <label htmlFor="password">Password</label>
          <div className="sec-2">
            <LockClosedOutline
              className="locked-outline"
              color={'#00000'} 
              title={""}
            />
            <input id="password" className="pas" type="password" name="password" placeholder="············"/>
            <EyeOutline
              className="locked-outline"
              color={'#00000'} 
              title={""}
              onClick={showPassword}
            />
          </div>
        </div>
        <button onClick={loginProcess} className="login">Login</button>
        <span onClick={passRecover}>Forgot Password?</span>
      </div>

    </div>
    
  );
}

export default LoginScreen;

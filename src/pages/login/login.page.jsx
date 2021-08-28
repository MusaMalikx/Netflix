import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/netflix-logo.svg';
import {AiOutlineGoogle} from 'react-icons/ai';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import './login.style.scss';
import Button from '@material-ui/core/Button';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log(email, password);

        auth.signInWithEmailAndPassword(email, password)
            .then((authUser) => console.log(authUser))
            .catch((error) => {
                alert(error.message);
            });
    }

    const handleGoogle = () => {
        
        signInWithGoogle();
    }

    return (
        <div className='login'>
            <div className='top'>
                <div className="wrapper">
                    <Logo className='logo' />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <Button className="login-button" type="submit" onClick={handleSubmit} variant="contained" color="secondary">
                        Sign In
                    </Button>
                    <Button className="login-button-google"  onClick={handleGoogle}  variant="contained" color="primary">
                        <AiOutlineGoogle size={22} style={{color:"var(--main-color)",marginRight:"5px"}} />
                        Sign In with Google
                    </Button>
                    <span>New to Netflix?
                        <b><Link to="/sign-up" className="link" style={{textDecoration:"none",color:"#0F52BA"}} >
                            Sign Up now
                        </Link></b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more.</b>
                    </small>
                </form>
            </div>
        </div>
    )
}

export default Login;

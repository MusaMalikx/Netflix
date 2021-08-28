import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/netflix-logo.svg';
import { AiOutlineGoogle } from 'react-icons/ai';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './sign-up.style.scss';

const SignUP = () => {

    const [password, setPassword] = useState("");
   const [email, setEmail] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        console.log(password);
        //console.log(userName);
        console.log(email);

        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => console.log(authUser))
            .catch((error) => {
                alert(error.message);
            });

    }

    const handleGoogle = () => {

        signInWithGoogle();
    }

    return (
        <div className="whole">
            <div className="wrapper">
                <Logo className='logo' />
                <Link to="/login" className="link">
                    <Button className="login-button" variant="contained" color="secondary">
                        Sign In
                    </Button>
                </Link>
            </div>
            <br /><br />
            <div className="container">
                <div className="content">
                    <h1 className="line" >Sign up to start your membership</h1>
                    <p className="line" >Just this one step and you're done!</p>
                    <p className="line" >We hate paperwork, too.</p>
                    <h3 className="line" >Create your account</h3>
                </div>
                <form className='form'>
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="off" />
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} id="" placeholder="Password" />
                    <FormGroup row style={{
                        marginTop:"10px",
                    }}>
                        <FormControlLabel
                            control={<Checkbox style={{
                                color:"red",
                            }} />}
                            label={<p style={{
                                fontSize: "15px",marginBottom:"0",marginTop:"7px"
                            }}>Please do not email me Netflix special offers</p>}
                            labelPlacement="end"
                        />
                    </FormGroup>
                    
                    <Button className="btn" type="submit" onClick={handleSubmit} variant="contained" color="secondary">
                        Sign Up
                    </Button>
                    <Button className="login-button-google" onClick={handleGoogle} variant="contained" color="primary">
                        <AiOutlineGoogle size={22} style={{ color: "var(--main-color)", marginRight: "5px" }} />
                        Sign Up with Google
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default SignUP

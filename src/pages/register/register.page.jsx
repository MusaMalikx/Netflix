import React from 'react';
import './register.style.scss';
import { ReactComponent as Logo } from '../../assets/netflix-logo.svg'
import { ArrowForwardIos } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Register = () => {


    return (
        <div className='register'>
            <div className='top'>
                <div className="wrapper">
                    <Logo className='logo' />
                    <Link to="/login" className="link">
                        <button className="login-button">
                            Sign In
                        </button>
                    </Link>
                </div>
            </div>
            <br /><br />
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <Link to="/sign-up" className="link">
                    <Button className="register-button" variant="contained" color="secondary">
                        JOIN NOW<span><ArrowForwardIos /></span>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default Register;

import React from 'react';
import { useState } from 'react';
import './navbar.style.scss';
import Search from '../search/search.component';
import { ReactComponent as Logo } from '../../assets/netflix-logo.svg';
import Notifications from '@material-ui/icons/Notifications';
import { Link, NavLink, useHistory } from 'react-router-dom';
import Avatar from '../../assets/netflix-avatar.png'

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const history = useHistory();

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    }

    return (
        <div className="Nav">
            <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
                <div className="container">
                    <div className="left">
                        <div className='options'>
                            <NavLink to="/" className="link">
                                <Logo className='logo' />
                            </NavLink>
                            <Link to="/movies" className="link">
                                <span className='option'>Movies</span>
                            </Link>
                            <Link to="/tv-shows" className="link">
                                <span className='option'>TV Shows</span>
                            </Link>
                            <Link to="/new-and-popular" className="link">
                                <span className='option'>New and Popular</span>
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <Search />
                        <Link to='/kid' className='link'>
                            <span>KID</span>
                        </Link>
                        <Link to='/' className='link'>
                            <Notifications className='icon' />
                        </Link>
                        <img style={{
                            cursor: "pointer"
                        }}
                            onClick={() => history.push('/profile')}
                            width="25px"
                            src={Avatar} alt="" />
                    </div>
                </div>
            </div >
        </div>
    )
}

export default Navbar;
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import Navbar from '../../components/navbar/navbar.component';
import { selectUser } from '../../features/user/userSlice';
import Button from '@material-ui/core/Button';
import './profile.style.scss';
import { auth } from '../../firebase/firebase';
import Avatar from '../../assets/netflix-avatar.png'

const Profile = () => {

    const user = useSelector(selectUser);

    //console.log(auth.currentUser.emailVerified)

    return (
        <div className="profile">
            {
                !user && <Redirect to='/login' />
            }
            <Navbar />
            <div className="info">
                <h1>Profile</h1>
                <div className="inner">
                    <img src={Avatar} alt="" />
                    <div className="details">
                        <h2>{user.email}</h2>
                        <div className="plans">
                            <Button onClick={() => auth.signOut()} variant="contained" color="secondary">
                                Sign Out
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { selectVerification } from '../../features/user/userSlice';
import { send_verification } from '../../firebase/firebase';
import './verification.style.scss';
import Netflix from '../../assets/netflix.png'

const Verification = () => {

    const bool = useSelector(selectVerification);

    const handleClick = () => {
        send_verification();
    }

    return (
        <div className="verify">
            {
                bool && <Redirect to="/" />
            }
            <img src={Netflix} alt="" />
            <Button className="btn" onClick={handleClick} variant="outlined" color="secondary">
                Send Verification
            </Button>
            <p>If you have <strong style={{
                color:"green"
            }}>VERIFIED</strong> already, just <strong style={{
                color:"var(--appcolor)"
            }}>REFRESH</strong> the page</p>
        </div>
    )
}

export default Verification;
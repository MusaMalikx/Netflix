import Popup from 'reactjs-popup';
import ReactPlayer from 'react-player';
import { PlayCircleOutline, Cancel } from '@material-ui/icons';
import './video.style.scss';

const Video = ({ videos }) => {
    return (
        <div>
            
            <div className="video">
                {
                    videos && <h1>VIDEOS</h1> && videos.results.map((video) => (
                        <>
                            <Popup
                                trigger={
                                    <div style={{ position: "relative", width: "400px", cursor: "pointer", margin: "20px 10px" }}>
                                        <img src={`https://img.youtube.com/vi/${video?.key}/maxresdefault.jpg`} alt="" style={{
                                            width: "400px", border: "2px solid white", borderRadius: "2px"
                                        }} />
                                        <PlayCircleOutline style={{
                                            position: "absolute",
                                            color: "white",
                                            left: "40%",
                                            top: "38%",
                                            fontSize: "60px",
                                        }} />
                                    </div>
                                }
                                modal
                                nested
                            >
                                {close => (
                                    <>
                                        <Cancel onClick={close} style={{
                                            backgroundColor: "red", color: "black",
                                            position: "relative", left: "47%", padding: "0px", margin: "0px",
                                            borderRadius: "50%", cursor: "pointer"
                                        }} />
                                        <ReactPlayer url={`https://youtu.be/${video?.key}`} playing style={{
                                            border: "2px solid red",backgroundColor:"rgba(0,0,0,0.3)"
                                        }} />

                                    </>
                                )}
                            </Popup>
                            <hr />
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default Video;
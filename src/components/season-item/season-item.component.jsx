import axios from 'axios';
import Modal from 'react-bootstrap/Modal'
import { useEffect } from 'react';
import { useState } from 'react';
import EpisodeItem from '../episode-item/episode-item.component';
import './season-item.style.scss';

const SeasonItem = ({ season, tv_id }) => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //console.log(season, tv_id);

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        const fetchEpisodes = async () => {
            axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/season/${season.season_number}?api_key=${process.env.REACT_APP_API}&language=en-US`).then((response) => setEpisodes(response.data.episodes));
        }
        fetchEpisodes();

    }, [tv_id, season]);

    return (
        <>

            <div className="season-item" onClick={handleShow}>
                
                    <img className="image" src={`https://image.tmdb.org/t/p/original${season?.poster_path}`} alt="" />
                
                <p>{season?.name}</p>

            </div>

            <Modal className='mod'
                variant="secondary"
                size="xl"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                scrollable={true}
            >
                <Modal.Header closeButton="red">
                    <Modal.Title>
                        <h1>EPISODES</h1>
                        <p style={{
                            marginLeft: "30px",
                            color: "var(--appcolor)",
                            border: "2px solid var(--color)",
                            textAlign: "center"
                        }}>
                            {`Season ${season.season_number}`}
                        </p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="episodes">
                        {
                            episodes.map((epi, i) => (
                                <EpisodeItem key={i} episode={epi} />
                            ))
                        }
                    </div>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default SeasonItem;
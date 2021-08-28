import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import './list-item.style.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { setItem, setType } from '../../features/preview/previewSlice';
import { useDispatch } from 'react-redux';

function ListItem({ title, type, movie }) {

    const [video, setVideo] = useState([]);
    const [tp, setTp] = useState("");
    // console.log(title);
    useEffect(() => {

        async function fetchVideo() {

            if (title === "Trending") {
                const v_req = await axios.get(`https://api.themoviedb.org/3/${movie?.media_type}/${movie?.id}?api_key=${process.env.REACT_APP_API}&append_to_response=videos`)
                //console.log(movie.id);
                //console.log(v_req.data);
                setVideo(v_req.data);
                return v_req;
            }
            else {
                const v_req = await axios.get(`https://api.themoviedb.org/3/${type}/${movie?.id}?api_key=${process.env.REACT_APP_API}&append_to_response=videos`)
                //console.log(movie.id);
                //console.log(v_req.data);
                setVideo(v_req.data);
                return v_req;
            }
        }

        title === "Trending" ? setTp(movie.media_type) : setTp(type)
        fetchVideo();

    }, [movie, type, title])

    //console.log(title);
    //console.log(type);
    //console.log(video);
    const dispatch = useDispatch();
    const handleLink = () => {
        dispatch(setItem(video));
        dispatch(setType(tp));
    }

    return (
        <Link to={{ pathname: "/preview", videos: video, type: tp }} onClick={handleLink}>
            <div>
                <img className="list-item" src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} alt="" />
            </div>
        </Link>
    )
}

export default ListItem

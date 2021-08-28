import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import './flogo.style.scss';

const Flogo = ({ type, name, id }) => {

    //console.log(type, id);

    const [logos, setLogo] = useState([]);

    useEffect(() => {
        async function fetchLogo() {
            const req = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=${process.env.REACT_APP_API}`);
            //console.log(req.data.logos);
            setLogo(req.data.logos);
            return req;
        }

        fetchLogo();

    }, [type, id])

    //console.log(logos);
    var check = "";

    return (
        <div className="logo">
            {
                logos.length ? (logos.map(logo => (

                    logo.iso_639_1 === "en" && !check && (
                        <p style={{ visibility: "hidden" }}>{check = logo?.file_path}</p>
                    )

                ))) : <h2 style={{
                    fontSize:"70px"
                }}>{name}</h2>
            }
            {
                check && <img src={`https://image.tmdb.org/t/p/original${check}`} alt="Name Logo" />
            }

        </div>
    )
}

export default Flogo;
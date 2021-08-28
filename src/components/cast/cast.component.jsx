import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import './cast.style.scss';
import Actor from "../actor/actor.component";


const Cast = ({ id, type }) => {

    const [cast, setCast] = useState([]);

    //console.log(id);

    useEffect(() => {

        async function fetchCast() {
            const req = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/credits?api_key=d02666ac6adffd1a4f10b4f15e56beb0&language=en-US`);
            //console.log(req.data.cast);
            setCast(req.data.cast);
            return req;
        }

        fetchCast();

    }, [id, type])

    //console.log(cast);

    return (
        <div>
            {cast.length !== 0 && (
                <>
                    <h1 style={{
                        marginTop: "60px",
                    }}>CAST</h1>
                    <div className="cast">
                        {
                            cast.map(cast => (
                                <Actor info={cast} />
                            ))
                        }
                    </div>
                </>
            )
            }
        </div>
    )
}

export default Cast;
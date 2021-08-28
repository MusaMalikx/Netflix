import React from 'react';
import './actor.style.scss';

const Actor = ({ info }) => {

    console.log(info);

    return (
        <div className="actor">
            <img src={`https://image.tmdb.org/t/p/original${info?.profile_path}`} alt="" />
            {
                <div className="information">
                    <p>{info.character}</p>
                    <h5>{info.name}</h5>
                </div>
            }
        </div>
    )
}

export default Actor;
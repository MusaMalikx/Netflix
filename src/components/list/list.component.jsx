import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './list.style.scss';
import ListItem from '../list-item/list-item.component';

export default function List({ title, type, url }) {

    const [list, setList] = useState([]);

    useEffect(() => {
        
            const getMovies = async () => {
                axios.get(url).then((response) => setList(response.data.results));
            }

            getMovies();

    }, [url])

    return (
        <div className="list">
            <h2>{title}</h2>
            <div className="list-items">

                {
                    list.map((list, i) => (
                        <ListItem key={i} title={title} type={type} movie={list} />
                    ))
                }

            </div>
        </div>
    )
}

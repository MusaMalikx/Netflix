
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './image.style.scss';

const Image = ({ type, id }) => {

    //console.log(type, id);
    const [image, setImage] = useState([]);

    useEffect(() => {
        async function fetchImage() {
            const req = await axios.get(`https://api.themoviedb.org/3/${type}/${id}/images?api_key=d02666ac6adffd1a4f10b4f15e56beb0`);
            //console.log(req.data.backdrops);
            setImage(req.data.backdrops);
            return req;
        }

        return fetchImage();

    }, [id, type])

    //console.log(image);

    return (
        <div className="image">
            <Carousel style={{
                padding: "30px 0px",
                margin: "30px",
                textAlign: "center"
            }}>

                {

                    image.map(img => (
                        <Carousel.Item className='img'>
                            <img className="w-70" style={{ height: "500px" }}
                                src={`https://image.tmdb.org/t/p/original${img?.file_path}`} alt="" />

                        </Carousel.Item>
                    ))

                }

            </Carousel>
        </div>
    )
}

export default Image;
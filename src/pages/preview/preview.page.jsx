import React from 'react';
import './preview.style.scss';
import Cast from '../../components/cast/cast.component';
import Image from '../../components/image/image.component';
import Flogo from '../../components/flogo/flogo.component';
import Season from '../../components/season/season.component';
import Video from '../../components/video/video.component';
import { useSelector } from 'react-redux';
import { selectItem, selectType } from '../../features/preview/previewSlice';

export default function Preview() {

    const item = useSelector(selectItem);
    const type = useSelector(selectType);

    const date = new Date(item.release_date ? item.release_date : item.first_air_date);//.getMonth();
    const year = date.getFullYear();

    return (

        <div className="bg"
        >
            <div className="overview" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url("https://image.tmdb.org/t/p/original${item?.backdrop_path}")`,
                backgroundSize: "cover", backgroundPosition: "center center", backgroundAttachment: "fixed",
                //     // backgroundPosition: "center",
            }}>
                <span style={{
                    marginLeft: "30px", display: "flex", flexDirection: "row", justifyContent: "space-between"
                }}>
                    <Flogo id={item?.id} name={item.name || item.title || item.original_title || item.original_name} type={type} />
                    <span style={{
                        flex: "1", paddingTop: "27px", paddingLeft: "15px", fontSize: "25px", color: "white", width: "50px"
                    }}>({year})</span>
                </span>
                <span className='desc'>
                    {
                        item.overview//?.length && item.overview.length > 100 ? item.overview.substr(0, 100 - 1) + '...' : item.overview
                    }
                </span>
            </div>
           
            <Cast id={item.id} type={type} />
            <Image id={item.id} type={type} />
            <div>
                {
                    type === 'tv' && (
                        <Season tv_id={item?.id} seasons={item?.seasons} />
                    )
                }
            </div>
            
            <Video videos={item.videos} />
        </div>
    )
}

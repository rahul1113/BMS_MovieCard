import { useEffect, useState } from "react";
import playIcon from '../../../asset/pngkey.com-namaskar-image-png-3648753.png'
import './Card.css'
import Image from '../Image/Image'


const Card = ({ item, handleView, ind }) => {
    const {
        EventImageUrl,
        EventName,
        totalVotes,
        wtsPerc,
        DispReleaseDate
    } = item;
    const handlVideo = () => {
        handleView(item, ind)
    }
    return (
        <div className='movie-card' >
            <Image url={EventImageUrl} handlVideo={handlVideo} />

            <p>{EventName}</p>
        </div>
    );
};
export default Card;

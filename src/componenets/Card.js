import React, { useState } from 'react'
import '../styles/CardStyle.css'
import CardModal from './CardModal';
import CardRating from './CardRating';

const Card = ({ volumeInfo }) => {
    const image = volumeInfo?.imageLinks?.smallThumbnail || 'https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-cartoon-happy-book-face-art-png-image_5117373.png'
    const title = volumeInfo?.title || "Title is not available";
    const author = volumeInfo?.authors || "Author(s) name not available"
    const description = volumeInfo?.description ? (volumeInfo.description.length > 100 ? volumeInfo.description.slice(0, 75) + "..." : volumeInfo.description) : 'No Discription'
    const [modalOpen, setModalOpen] = useState(false);
    const [cardRating,setCardRating] = useState(0)
    const handelOpen =(e)=>{
        e.preventDefault()
        setModalOpen(true)
    }
    const handelClose =()=>{
        setModalOpen(false)
    }
    const handleCardRatings=(data)=>{
        setCardRating(data)
    }
    return (
        <>
        <div className='card-conatiner'>
            <div className='image' onClick={(e)=>handelOpen(e)}>
                <img src={image} alt={title} />
            </div>
            <h2>{title}</h2>
            <h4>{author}</h4>
            <p>{description}</p>
            <div className='rating-fav'>
            {/* <button className='favorite'>Favorite</button> */}
            <CardRating rating={cardRating}/>
            </div>
        </div>
        {modalOpen&&<CardModal volumeInfo={volumeInfo} closeModal={handelClose} handleCardRatings={handleCardRatings}/>}
        </>
    )
}

export default Card
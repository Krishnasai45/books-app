import React, { useEffect, useState } from 'react'
import '../styles/CardModel.css'
import Ratings from './Ratings';

function CardModal({ closeModal, volumeInfo, handleCardRatings }) {

    const { imageLinks, title, authors, description, publisher, publishedDate, categories } = volumeInfo

    const image = imageLinks?.thumbnail || 'https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-cartoon-happy-book-face-art-png-image_5117373.png'
    const titles = title && title || "Title is not available";
    const author = authors && authors || "Author(s) name not available"
    const descriptions = description ? description : 'No Discription'
    const publishers = publisher || 'Un-Known'
    const publishedDates = publishedDate || 'Un-Known'
    const categorie = categories && categories[0] || "Others"

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)
    const [allRatings,setAllAratings] = useState([])
    const [comment,setComment] = useState('')
    const [rates,setRates] = useState([])
    const handleRating=(data)=>{
        setRating(data)
    }
    const handleHover=(data)=>{
        setHover(data)
    }
    const handleSubmitRating=(e)=>{
        e.preventDefault()
        let ratingObject = {
            rating:rating,
            comment:comment
        }
        if(rating<=0) return
        setAllAratings((prv)=>[...prv,ratingObject])
        setRates((prev)=>[...prev,ratingObject.rating ])
    }
    // console.log("allRatings",allRatings)
    useEffect(()=>{
        if(allRatings.length>0){
            let totalRating = Math.floor((rates.reduce((acc,ele)=> ele+acc))/ rates.length)
            handleCardRatings(totalRating)
        }
       
    },[allRatings])

    return (
        <div
            className="modal-container"
            onClick={(e) => {
                if (e.target.className === "modal-container")
                    closeModal(false);
            }}
        >
            <div className="modal">
                <div className="modal-header">
                    <h4>BOOK Deatls</h4>
                    <div onClick={closeModal} className="close">X</div>
                </div>
                <div className="modal-content">
                    <div className='modal-card-main'>
                        <div className='modal-image'><img src={image} alt={titles} /></div>
                        <div className='modal-title'>
                            <h2>Title:- {titles}</h2>
                            <h3>Author:- {author}</h3></div>
                        </div>
                    <p>Description:- {descriptions}</p>
                    <h4>Publisher:- {publishers}</h4>
                    <h4>published-Date:- {publishedDates}</h4>
                    <h4>Gener:- {categorie}</h4>
                    <div className='ratings'>
                        <Ratings rating={rating} hover={hover} handleRating={handleRating} handleHover={handleHover} />
                        <input type='text' value={comment} onChange={(e)=>setComment(e.target.value)}/>
                        <button onClick={handleSubmitRating}>submit</button>
                    </div>
                    {
                        allRatings.length>0 && allRatings.map((ele)=>{
                            return(
                                <div>
                                    <div>Rating:- {ele.rating}</div>
                                    <p>comment:- {ele.comment}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CardModal
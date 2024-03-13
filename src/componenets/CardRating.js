import React from 'react'

function CardRating({rating}) {
  return (
    <div className='stars'>
        {
            [...Array(5)].map((_,index)=>{
                return <span key={index}
                className={`${index+1 <= rating ? 'selected':'' }`}
                >&#9733;</span>
            })
        }
        <h4>{rating}/5</h4>
        </div>
  )
}

export default CardRating
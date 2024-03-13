import React from 'react'

function Ratings({rating,hover,handleRating,handleHover}) {
  return (
    <div className='stars'>
        {
            [...Array(5)].map((_,index)=>{
                return <span key={index}
                className={`${index+1 <= rating ? 'selected':'' } ${index+1 <= hover ? 'selected':'' }`}
                onMouseOver={()=>handleHover(index+1)}
                onMouseOut={()=>handleHover(0)}
                onClick={()=>handleRating(index+1)}
                >&#9733;</span>
            })
        }
        </div>
  )
}

export default Ratings
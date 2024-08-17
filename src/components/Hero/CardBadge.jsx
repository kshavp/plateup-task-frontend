import React from 'react'

const CardBadge = ({quant,unit,icon}) => {
  return (
    <div className='card-badge'>
        <span style={{display:'flex',alignItems:'center',columnGap:'5px'}}>
            <p>{icon}</p>
            <p style={{fontSize:'1rem',fontWeight:'bold'}}>{quant}</p>
            <p style={{fontSize:'0.8rem',fontWeight:'lighter'}}>{unit}</p>
        </span>
    </div>
  )
}

export default CardBadge
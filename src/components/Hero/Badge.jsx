import React from 'react'

const Badge = ({text, isActive, onClick}) => {
  return (
    <div onClick={onClick} className={`badge ${isActive ? 'badge-selected' : ''}`} >
        {text}
    </div>
  )
}

export default Badge
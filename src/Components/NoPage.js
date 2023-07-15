import React from 'react'
import { useNavigate } from 'react-router-dom'

function NoPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>204 No Content</h1>
      <button className='nopage-btn' onClick={()=>navigate("/")}>Home</button>
    </div>
  )
}

export default NoPage
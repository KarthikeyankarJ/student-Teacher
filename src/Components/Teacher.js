import React, { useState } from 'react'
import Base from '../Base/Base'
import AddTeacher from './AddTeacher'
import EditTeachers from './EditTeachers'
import { useNavigate } from 'react-router-dom'

function Teacher({teachers, setTeachers}) {
const navigate =useNavigate()
const [teachId, setTeachId] = useState("")
  const deletTeacher = (teacherId)=>{
    const removeTeacher = teachers.filter((teacher) => teacher.id !== teacherId) 
    setTeachers(removeTeacher)
  }
  function navigateToEditteach(teacherId){
    // setStudId(studentId)
    navigate(`/editteach/${teacherId}`)
  }

  return (
    <Base
    title ={"Teacher DataBase"}
    description ={"All Mentors Details available here"}
    >
      <div className='stud-collections'>
      {teachers.map((teach,idx)=>(
      <div className='stud-card' key={idx}>
        <h2>{teach.name}</h2>
        <p>Batch: {teach.batch}</p>
          <p>Eduction: {teach.education}</p>
          <p>Experience: {teach.experience}</p>
          <p>SkillSet: {teach.skillset}</p>
          <div className='card-btn-grp'>
            <button onClick={()=>navigateToEditteach(teach.id)}>Edit</button>
            <button onClick={()=>deletTeacher(teach.id)}>Delete</button>
          </div>
      </div>
    ))}
      </div>
    </Base>
  )
}

export default Teacher
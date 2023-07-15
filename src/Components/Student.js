import React, { useState } from 'react'
import Base from '../Base/Base'
import AddStudents from './AddStudents'
import EditStudents from './EditStudents'
import { useNavigate } from 'react-router-dom'

function Student({students, setStudents}) {
const[studId, setStudId]= useState("")
const navigate = useNavigate()
  const deleteStudent = (studentId)=>{
    const removedstudent= students.filter((student)=>student.id !== studentId)
    setStudents(removedstudent)
  }
  function navigateToEditStud(studentId){
    // setStudId(studentId)
    navigate(`/edit/${studentId}`)
  }
   return (
    <Base
    title={"Student DataBase"}
    description={"All student info displaying here"}
    >
    <div className='stud-collections'>
      {students.map((stud,idx)=>(
        <div className='stud-card' key={idx}>
          <div className='stud-card'>
          <h2>{stud.name}</h2>
          <p>Batch: {stud.batch}</p>
          <p>Eduction: {stud.education}</p>
          <p>Experience: {stud.experience}</p>
          <p>SkillSet: {stud.skillset}</p>
          <div className='card-btn-grp'>
            <button onClick={()=>navigateToEditStud(stud.id)}>Edit</button>
            <button onClick={()=>deleteStudent(stud.id)}>Delete</button>
          </div>
          </div>
        </div>
      ))}
      </div>
    </Base>
  )
}

export default Student
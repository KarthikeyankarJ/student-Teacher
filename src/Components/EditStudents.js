import React, { useEffect, useState } from 'react'
import Base from '../Base/Base';
import { useNavigate, useParams } from 'react-router-dom';

function EditStudents({ students, setStudents}) {
  const {id} =useParams()
  const navigate = useNavigate()
  const[idx, setIdx]=useState("");
  const[name, setName]=useState("");
  const[batch, setBatch]=useState("");
  const[education, setEducation]=useState("");
  const[experience, setExperience]=useState("");
  const[skillset, setSkillset]=useState("");

useEffect(()=>{
  const studentData = students.find(stud => stud.id === id)
if(studentData)
{  setIdx(studentData.id)
  setName(studentData.name)
  setBatch(studentData.batch)
  setEducation(studentData.education)
  setExperience(studentData.experience)
  setSkillset(studentData.skillset)}
},[id, students])

const updateStudent = ()=>{
  const studentIndex = students.findIndex((stud)=> stud.id === id)
  console.log(studentIndex)
  const updatedStudent ={
    id,
    name,
    batch,
    education,
    experience,
    skillset
  }

students[studentIndex] = updatedStudent
setStudents([...students])
navigate("/students")
setIdx('')
setName('')
setBatch('')
setEducation('')
setExperience('')
setSkillset('')

}
  return (
    <Base
    title={"Edit yor Data"}
    description={"After update click the below button"}
    >

    <div className='form-grp'>
      <h4>Edit Student</h4>
      <input placeholder='Enter Student ID' type='number'
      value={id}
      onChange={(e)=>setIdx(e.target.value)}/>
      <input placeholder='Enter the Name' type='text'
      value={name}
      onChange={(e)=>setName(e.target.value)}/>
      <input placeholder='Enter Batch'
      value={batch}
      onChange={(e)=>setBatch(e.target.value)}/>
      <input placeholder='Enter Education' type='text'
      value={education}
      onChange={(e)=>setEducation(e.target.value)}/>
      <input placeholder='Enter Experience' type='text'
      value={experience}
      onChange={(e)=>setExperience(e.target.value)}/>
      <input placeholder='Enter Skillset' type='text'
      value={skillset}
      onChange={(e)=>setSkillset(e.target.value)}/>
      <button onClick={updateStudent}>Update Students</button>
    </div>

    </Base>
  )
}

export default EditStudents
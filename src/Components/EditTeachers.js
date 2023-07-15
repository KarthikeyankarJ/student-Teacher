import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Base from '../Base/Base';

function EditTeachers({teachId, teachers, setTeachers}) {
  const {id} =useParams()
  const navigate = useNavigate()
  const[idx, setIdx]=useState("");
  const[name, setName]=useState("");
  const[batch, setBatch]=useState("");
  const[education, setEducation]=useState("");
  const[experience, setExperience]=useState("");
  const[skillset, setSkillset]=useState("");

useEffect(()=>{
const teacherData = teachers.find(teach=> teach.id === id)
if(teacherData){
  setIdx(teacherData.id)
  setName(teacherData.name)
  setBatch(teacherData.batch)
  setEducation(teacherData.education)
  setExperience(teacherData.experience)
  setSkillset(teacherData.skillset)
}
},[teachId, teachers])

const updateTeacher = ()=>{
  const teachIndex = teachers.findIndex(teach => teach.id === id)
  console.log(teachIndex)

const updatedTeacher ={
  id,
  name,
  batch,
  education,
  experience,
  skillset
}
teachers[teachIndex]= updatedTeacher
setTeachers([...teachers])
navigate("/teachers")
}
  return (
    <Base>

    <div className='form-grp'>
      <h4>Add Teacher</h4>
      <input placeholder='Enter Mentor ID' type='number'
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
      <button onClick={updateTeacher}>Update Students</button>
    </div>
    </Base>
  )
}

export default EditTeachers
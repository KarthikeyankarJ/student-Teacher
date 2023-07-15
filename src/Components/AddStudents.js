import React, { useState } from 'react'
import Base from '../Base/Base';
import { useNavigate } from 'react-router-dom';

function AddStudents({students, setStudents}) {
  const navigate = useNavigate()
  const[id, setId]=useState("");
  const[name, setName]=useState("");
  const[batch, setBatch]=useState("");
  const[education, setEducation]=useState("");
  const[experience, setExperience]=useState("");
  const[skillset, setSkillset]=useState("");

  const handleAddstudent =() =>{
    const newStudent ={
      id,
      name,
      batch,
      education,
      experience,
      skillset
    }
    setStudents([...students, newStudent])
    navigate("/students")
    setId('')
    setName('')
    setBatch('')
    setEducation('')
    setExperience('')
    setSkillset('')
  }

  return (
    <Base
    title={"Add Your Data"}
    description={"Fill all the required inputs"}
    >
    <div className='form-grp'>
      <h4>Add Student</h4>
      <input placeholder='Enter Student ID' type='number'
      value={id}
      onChange={(e)=>setId(e.target.value)}/>
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
      <button className='nopage-btn' onClick={handleAddstudent}>Add Students</button>
    </div>
    </Base>
  )
}

export default AddStudents
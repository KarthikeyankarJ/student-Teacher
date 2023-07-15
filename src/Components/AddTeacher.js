import React, { useState } from 'react'
import Base from '../Base/Base';
import { useNavigate } from 'react-router-dom';

function AddTeacher({teachers, setTeachers}) {
  const navigate = useNavigate();
  const[id, setId]=useState("");
  const[name, setName]=useState("");
  const[batch, setBatch]=useState("");
  const[education, setEducation]=useState("");
  const[experience, setExperience]=useState("");
  const[skillset, setSkillset]=useState("");

  const handleAddTeacher =()=>{
    const newTeacher ={
      id,
      name,
      batch,
      education,
      experience,
      skillset
    }

    
//// after adding input box will get empty

    setTeachers([...teachers, newTeacher])
    navigate("/teachers")
    setId('')
    setName('')
    setBatch('')
    setEducation('')
    setExperience('')
    setSkillset('')
  }

  return (
    <Base>
    <div className='form-grp'>
      <h4>Add Teacher</h4>
      <input placeholder='Enter Mentor ID' type='number'
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
      <button className='nopage-btn' onClick={handleAddTeacher}>Add Students</button>
    </div>
    </Base>
    )
}

export default AddTeacher
import { useState } from 'react';
import './App.css';
import Student from './Components/Student';
import { data } from './Data/data';
import Teacher from './Components/Teacher';
import { data2 } from './Data/data2';
import { Route, Routes } from 'react-router-dom';
import Dashboad from './Components/Dashboad';
import AddStudents from './Components/AddStudents';
import AddTeacher from './Components/AddTeacher';
import EditStudents from './Components/EditStudents';
import EditTeachers from './Components/EditTeachers';
import NoPage from './Components/NoPage';


function App() {
  const [students, setStudents]= useState(data);
  const [teachers, setTeachers]=useState(data2)
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Dashboad />}/>
        <Route path='/students' element={<Student
          students ={students}
          setStudents={setStudents}
        />}/>
        <Route path='/teachers' element={<Teacher
        teachers ={teachers}
        setTeachers={setTeachers}
        />}/>
        <Route path='/add-students'element={<AddStudents
        students = {students}
        setStudents={setStudents}
        />}/>
        <Route path='/add-teachers'element={<AddTeacher
    teachers= {teachers}
    setTeachers={setTeachers}
    />}/>
        <Route path='/edit/:id' element={<EditStudents
              studId = {"1"}
              students = {students}
              setStudents={setStudents}
              />}/>


        <Route path='/editteach/:id' element={    <EditTeachers
    teachId= {"1"}
    teachers= {teachers}
    setTeachers={setTeachers}
    />}/>    

       <Route path='*' element={<NoPage/>}/>  
      </Routes>

      
    </div>
  );
}

export default App;

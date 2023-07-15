import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'


function Base({title, description, children}) {
  const navigate = useNavigate()
  return (
    <div className='main-container'>
      <div className='mid'>
      <header>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>navigate("/")}
          >
            JKData
          </IconButton>
          <Button color="inherit" onClick={()=>navigate("/students")}>Student</Button>
          <Button color="inherit" onClick={()=>navigate("/add-students")}>Add-Student</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
      </header>
      <div className='side-mid'>
        <div className='sidebar'>
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate("/teachers")}>Teachers</button>
        <button onClick={()=>navigate("/add-teachers")}>AddTeacher</button>
        </div>
        <div className='main-content'>
          <h1>{title}</h1>
          <h4>{description}</h4>
          <div>
          {  children }
          </div>
        </div>

      </div>
      </div>
    </div>
  )
}

export default Base
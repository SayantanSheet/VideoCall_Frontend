import React, { use, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom';
import '../App.css'
import IconButton from '@mui/material/IconButton';
import RestoreIcon from '@mui/icons-material/Restore';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

 function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");
    let handleJoinVideoCall = () => {
        navigate(`/${meetingCode}`)
    }
    return (
        <>

        <div className='navBar'>
            <div style={{display:"flex",alignItems:"center"}}>
                <h2>Apna Video Call</h2>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <IconButton>
                    <RestoreIcon/>
                    <p>History</p>
                </IconButton>
                <Button onClick={()=>{
                    localStorage.removeItem("token");
                    navigate("/auth")
                }}>
                    Logout
                </Button>
            </div>
        </div>

        <div className="meetContainer">
            <div className="leftPanel">
                <div>
                    <h2>Providing Quality Video Call Just Like Quality Education</h2>
                    <div style={{display:'flex', gap:"10px"}}>
                      <TextField onChange={(e) => setMeetingCode(e.target.value)} id='outlined-basic' label="Enter Meeting Code"/>
                    <Button  variant="contained" onClick={handleJoinVideoCall}>Join</Button>
                    </div>
                </div>
            </div>

            <div className="rightPanel">
                <img srcSet='/logo3.png' alt=''/>
            </div>
        </div>
        </>
    )
}

export default withAuth(HomeComponent)
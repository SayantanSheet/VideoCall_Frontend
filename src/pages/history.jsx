import React, { use, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';


export default function History() {

    const { getHistoryOfUser } = useContext(AuthContext);
    const [meetings, setMeetings] = useState([]);

    const routeTo = useNavigate();
    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                            console.log("Fetched history:", history); 
                setMeetings(history);

            } catch (error) {
                console.error("Error fetching history:", error);
            }
        }
        fetchHistory();
    }, [])
    return (
        <div>
            {
                meetings.map(e => {
                    return (
                        <>

                        <IconButton onClick={() => {
                            routeTo("/home")
                        }}>
                            <HomeIcon/>

                        </IconButton>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                                        Word of the Day
                                    </Typography>
                                    
                                    <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
                                    <Typography variant="body2">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>    
                        </Card >
                    
                    </>
    )
})
           }
        </div >
    )
}
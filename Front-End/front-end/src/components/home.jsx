import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from "@mui/material";
import { CardActions } from "@material-ui/core";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: '#d3d3d3'}}>
            <CardHeader title="Bar Management System" style={{ textAlign: 'center'}}/>
            <CardContent>
            <Button component={Link} to="/bar" variant="contained" color="primary"> Menu </Button>
            </CardContent>    
        </Card>
    );
}
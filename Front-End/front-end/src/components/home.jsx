import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from "@mui/material";
import { CardActions } from "@material-ui/core";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <Card sx={{ minWidth: 275, padding: 20 }}>
          <CardHeader title="Bar Management System" style={{ textAlign: 'center', fontSize: 24, backgroundColor: '#d3d3d3' }} />
          <CardContent style={{ textAlign: 'center', backgroundColor: '#d3d3d3' }}>
            <Button component={Link} to="/bar" variant="contained" color="primary" style={{ margin: 10 }}>
              Menu
            </Button>
            <Button component={Link} to="/bar/queue" variant="contained" color="primary" style={{ margin: 10 }}>
              Order Queue
            </Button>
          </CardContent>
        </Card>
      );
    }
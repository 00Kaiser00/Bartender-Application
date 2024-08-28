import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from "@mui/material";
import { CardActions } from "@material-ui/core";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function Menu() {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/bar', {
            headers: {
              'Accept': 'application/json'
            }
          })
          .then(response => {
            console.log('Response:', response);
            return response.json();
          })
          .then(data => {
            console.log('Data:', data);
            setCocktails(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }, []);

    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: '#d3d3d3'}}>
            <CardHeader title="Menu" style={{ textAlign: 'center'}}/>
            <CardContent style={{ textAlign: 'center'}}>
            {cocktails.map(cocktail => (
            <div key={cocktail.id}>
                <h2>{cocktail.name}</h2>
                <p>{cocktail.desc}</p>
                <p>Price: {cocktail.price}</p>
            </div>
        ))}
            <Button component={Link} to="/bar/order" variant="contained" color="primary"> Order </Button>
            </CardContent>
        </Card>
    );
}
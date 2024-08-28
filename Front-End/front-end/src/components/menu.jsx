import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from "@mui/material";
import { CardActions } from "@material-ui/core";

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
            <CardContent>
            {cocktails.map(cocktail => (
            <div key={cocktail.id}>
                <h2 style={{ textAlign: 'center'}}>{cocktail.name}</h2>
                <p style={{ textAlign: 'center'}}>{cocktail.desc}</p>
                <p style={{ textAlign: 'center'}}>Price: {cocktail.price}</p>
            </div>
        ))}
            </CardContent>
        </Card>
    );
}
import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from "@mui/material";
import { CardActions } from "@material-ui/core";
import Button from '@mui/material/Button';
import { useNavigate} from 'react-router-dom';


export default function NewOrder() {
    const [cocktailName, setCocktailName] = useState('');
    const [customerName, setCustomerName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('handleSubmit called');
        try 
        {
          console.log('Sending request...');
          const response = await fetch('http://localhost:3000/bar/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ cocktailName, customerName }),
          });
          console.log('Request sent');
          const data = await response.json();
          console.log('Response received');
          console.log(data);
          navigate('/');
        } 
        catch (error) 
        {
          console.error(error);
        }
      };

    return (
        <Card sx={{ minWidth: 275 }} style={{ backgroundColor: '#d3d3d3'}}>
            <CardHeader title="New Order" style={{ textAlign: 'center'}}/>
            <CardContent>
                <form onSubmit={handleSubmit} style={{ textAlign: 'center'}}>
                    <label>Cocktail Name:</label>
                    <input type="text" value={cocktailName} onChange={(event) => setCocktailName(event.target.value)} />
                    <br />
                    <label>Customer Name:</label>
                    <input type="text" value={customerName} onChange={(event) => setCustomerName(event.target.value)} />
                    <br />
                    <Button type="submit">Add Order</Button>
                </form>
            </CardContent>    
        </Card>
    );
}
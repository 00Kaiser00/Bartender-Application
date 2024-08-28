import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from "@mui/material";
export default function OrderQue() {
  const [orders, setOrders] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:3000/bar/order')
      .then(response => response.json())
      .then(data => setOrders(data)); 
  }, []);

  return (
    <Card sx={{ minWidth: 275 }} style={{ backgroundColor: '#d3d3d3'}}>
      <CardHeader title="Order Queue" style={{ textAlign: 'center'}}/>
      <CardContent style={{ textAlign: 'center'}}>
        {orders.map((order, index) => ( // Now orders is defined
          <p key={index}>{order.cocktailName} - {order.customerName}</p>
        ))}
      </CardContent>    
    </Card>
  );
}
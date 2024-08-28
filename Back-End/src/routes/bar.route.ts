import { Router } from "express";
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

//Add Cocktail
router.post ('/', async (req, res) => {
    try 
    {
      const price = parseFloat(req.body.price)
      const cocktail = await prisma.cocktail.create({
        data: {
          name: req.body.name,
          desc: req.body.desc,
          price: price,
        }
      })
      res.status(200).json(cocktail)
    } 
    catch (error) 
    {
      console.error(error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  })

//Display Cocktails
router.get('/', async (req, res) => {
    try 
    {
        const cocktails = await prisma.cocktail.findMany();
        res.status(200).json(cocktails);
    } 
    catch (error) 
    {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

//Add Order
router.post('/order', async (req, res) => {
    try 
    {
        const order = await prisma.order.create({
            data: {
                cocktailName: req.body.cocktailName,
                customerName: req.body.customerName
            }
        })
        res.status(200).json(order)
    } 
    catch (error) 
    {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

//Display Orders
router.get('/order', async (req, res) => {
    try 
    {
        const orders = await prisma.order.findMany();
        res.status(200).json(orders);
    } 
    catch (error) 
    {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

export default router;
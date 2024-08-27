import { Router } from "express";
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

let menu;

async function initMenu() {
  menu = await prisma.menu.create({
    data: {
      name: "Cocktails",
    }
  });
}

initMenu();

//Display Menu
router.get ('/', async (req, res) => {
    const menu = await prisma.menu.findMany({
        include: {
          cocktails: true,
        },
      });
      res.status(200).json(menu);
})

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
          menuId: menu.id
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



export default router;
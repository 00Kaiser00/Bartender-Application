import { Router } from "express";
import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get ('/', (req, res) => {
    
})
import express from 'express'
//import mysql2 from 'mysql2'
//import dotenv from 'dotenv'
const app = express();
import { PrismaClient } from '@prisma/client'
import  conn from './models/user.model.js'
import userRoutes from  './routes/user.route.js' 
import authRoutes from './routes/auth.route.js'


const prisma = new PrismaClient

app.use(express.json())

app.get("/", async (req, res) => {
   const allUsers = await prisma.user.findMany();
   res.json(allUsers);
})

app.post("/", async (req, res) => {
  const newUser = await prisma.user.create({ data: req.body });
  res.json(newUser)
})

app.put("/:id", async (req, res) => {
  const id = req.params.id;
  const newPassword = req.body.password
  const updatedUser = await prisma.user.update({ 
    where: { id: parseInt(id) }, 
    data: { password: newPassword } 
  });
  res.json(updatedUser)
})

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deletedUser = await prisma.user.delete({ 
    where: { id: parseInt(id) },
  });
  res.json(deletedUser)
})

app.post("/receiving", async (req, res) => {
  const newReceive = await prisma.receiving.create({ data: req.body });
  res.json(newReceive)
})

app.post("/receiving/many", async (req, res) => {
  const newReceive = await prisma.receiving.createMany({ data: req.body });
  res.json(newReceive)
})

// app.get("/receiving", async (req, res) => {
//   const allReceiving = await prisma.receiving.findMany({
//     include:{
//       registeredUser: true,
//      purchaseBy :true,
//     },
//    });
//    res.json(allReceiving);
// })

app.get("/receiving/:id", async (req, res) => {
  const id = req.params.id;
  const allReceiving = await prisma.receiving.findUnique({
    where: {
       id,
    },
    include:{
      registeredUser: true,
      purchaseBy :true,
    },
 });
  res.json(allReceiving);
})

app.get("/receiving", async (req, res) => {
  const serialNo = req.body.serialNo
  const allreceiving = await prisma.receiving.findUnique({
    where:{
      serialNo,
    },
    include:{
      registeredUser: false,
      purchaseBy :true,
    },
  });
  res.json(allreceiving);
})


app.listen(3000, () => {
  console.log(`Server is running on 3000 !!`)
})

app.use('/server/user', userRoutes);
app.use('/server/auth', authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
      res.status(statusCode).json({
        success: false,
        statusCode,
        message,
      });
});

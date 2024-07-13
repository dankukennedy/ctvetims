import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import cookieParser from 'cookie-parser';
//import userRoutes from  './routes/user.route.js' 
const app = express();

const prisma = new PrismaClient;

app.use(express.json());
app.use(cors(
 { 
  origin:["http://localhost:5173"],
  methods:["POST", "GET"],
  credentials: true
 }
));
app.use(cookieParser())

app.get("/register", async (req, res) => {
   const allUsers = await prisma.user.findMany()
   res.json(allUsers);
})

app.get("/test", async (req, res) => {
  const email = req.body.email
  const user = await prisma.user.findMany(
  {
    where:{
      email,
     }, 
  }
  );
  res.json(user);
})
app.delete("/test/:id", async (req, res) => {
  const id = req.params.id
  const deletedUser = await prisma.user.delete({ 
    where: { id, },
  });
  res.json(deletedUser);
})

// app.post("/register", async (req, res) => {
//   const { email, username, password } = req.body

//   if(!username || !email || !password || username ==='' || email ==='' || password ==='' ){
//     res.status(422).json("All fields must be filled !!");      
//     }
     
//      const hashedPassword = bcryptjs.hashSync(password, 10)     
//      const newUser = await prisma.user.create({ 
//         data:{ 
//            email,
//            username,
//           password: hashedPassword,
//          }
//        });
//        if(newUser) return res.json({Status: "Success"});
//        return res.json({Error:"Error creating user on the server"});
//    })

// app.post("/login", async (req, res) => {
//   const { email, password } = req.body

//   if( !email || !password  || email ==='' || password ==='' ){
//     res.status(422).json("All fields must be filled !!");      
//     }
//     const user = await prisma.user.findUnique({
//       where: {
//           email
//       }
//   })  
//   if(user){
//     const match = await bcryptjs.compare(password, user.password);
//     if(match){ 
//        const username = user.username;
//        const token = jwt.sign({username}, "jws-secret-key", {expiresIn: '1d'});
//        res.cookie('token', token);
//       return res.status(202).json({Status: "Success"});
//     }
//     else return res.json({Error:"Your Email or Password do not match"});

//   }else{
//     res.status(404).json({Error:"User cannot be found on the server"});
//   }     
      
//    })
  


app.put("/register/:id", async (req, res) => {
  const id = req.params.id;
  const newPassword = req.body.password
  const updatedUser = await prisma.user.update({ 
    where: { id: parseInt(id) }, 
    data: { password: newPassword } 
  });
  res.json(updatedUser)
})

app.delete("/register/:id", async (req, res) => {
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
app.post("/register", async (req, res) => {
  const user = await prisma.user.create({ data: req.body });
  res.json(user)
})
app.post("/", async (req, res) => {
  const user = await prisma.user.create({ data: req.body });
  res.json(user)
})
app.get("/", async (req, res) => {
  const alluser = await prisma.user.findMany({ data: req.body });
  res.json(alluser)
})

app.post("/receiving/many", async (req, res) => {
  const newReceive = await prisma.receiving.createMany({ data: req.body });
  res.json(newReceive)
})

app.get("/receiving", async (req, res) => {
  const allReceiving = await prisma.receiving.findMany({
    include:{
      registeredUser: true,
     purchaseBy :true,
    },
   });
   res.json(allReceiving);
})

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
      registeredUser: true,
      purchaseBy :true,
    },
  });
  res.json(allreceiving);
})


app.listen(3000, () => {
  console.log(`Server is running on 3000 !!`)
})

//app.use('/server/user', userRoutes);
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

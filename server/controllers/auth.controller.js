import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js';
import  jwt  from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client'
import nodemailer from 'nodemailer'
const prisma = new PrismaClient

//register user data

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || username.trim() === '' || email.trim() === '' || password.trim() === '') {
    return next(errorHandler(400, "All fields must be filled!"));
  }

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email, },
    });

    if (existingUser) {
      next(errorHandler(409, 'User already exists'));
      //return res.status(409).json({Error: "User already exists"});
    } 

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });
      if(newUser){
        return res.status(201).json({ Status: "Success", user: newUser });
      } else{
       return next(errorHandler(500, 'User cannot be found'));
      }  

     } catch (error) {
    return next(error);
  }
};

export const login = async  (req, res) => {
  const { email, password } = req.body

  if( !email || !password  || email ==='' || password ===''|| email.trim() === '' || password.trim() === '' ){
    res.status(422).json("All fields must be filled !!");      
    }
    try{
           const validUser = await prisma.user.findUnique({ where: { email } }); 
        if(validUser){
           const validUPassword = await bcryptjs.compare(password, validUser.password);
        if(validUPassword){ 
           const username = validUser.username;
           const token = jwt.sign({username}, "jws-secret-key", {expiresIn: '1h'});
           res.cookie('token', token, {httpOnly:true, maxAge:360000 });
          return res.status(202).json({Status: "Success"});
        } else return res.status(400).json("User Password do not match!!");    
     } else return res.status(400).json("User cannot be found!!");   
 } catch(error){
       next(error);
      }
      
   }


   export const forgotPassword =  async  (req, res) => {
    const { email } = req.body;
    try{
    const validUser = await prisma.user.findUnique({email});
         if(!validUser){
          return res.json({masage: "user not registered"});
         }
         const token = jws.sign({id:user.id}, process.env.KEY, {expiresIn: '5m'})
         
         var nodemailer = require('nodemailer');
          var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'admin@ctvet.com',
              pass: '1234567'
            }
          });

          var mailOptions = {
            from: 'admin@ctvet.com',
            to: email,
            subject: 'Reset Password',
            text: `http://localhost:5173/forgotpassword/${token}`
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              return res.json({ message:"error sending email sent"})

            } else {
              return res.json({status:true, message:"email sent"})
            }
          });
      } catch(err){
        console.log(err)
      }
   }
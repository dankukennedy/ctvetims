import express from 'express'
//const router = new express.Router();
import bcryptjs from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient


//register user data
export const register =  async (req, res, next) =>{

    const {username, email, password} = req.body;

    if(!username || !email || !password || username ==='' || email ==='' || password ==='' ){
        res.status(422).json("All fields must be filled !!");   
    
   }  try{
      conn.query("SELECT * FROM users WHERE username = ?", username, (err, result) =>{
         if(result.length){
            res.status(422).json("The username Already Existed !!")
          } else{
                 // Hash the password
                 const hashedPassword = bcryptjs.hashSync(password, 10);
            conn.query("INSERT INTO users SET ?",{username, email, password:hashedPassword },(err, result)=>{
                if(err){
                    console.log("err" + err);
                } else{
                    res.status(201).json(req.body);
                }
            })
         }
      })

   } catch(error){
    next(error)
   }
   
 

}

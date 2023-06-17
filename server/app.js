import express from "express";
import dbConnect from './config/dbConnect'
import corse from corse
 
const app=express()
dbConnect()

app.listen(5000,()=>{
    console.log('server connected')
})
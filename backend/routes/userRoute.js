import express, { Router } from 'express';
const router = express.Router();

Router.get('/register', (req, res) => {
  try {
    const body= req.body;
    if(body.name && body.email && body.password) {
      // Logic to register the user
      
      res.status(201).json({ message: 'User registered successfully' });
    }
  } catch (error) {
    
  }
});
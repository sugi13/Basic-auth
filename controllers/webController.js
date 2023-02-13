// get_signUp, post_signUp, post_login //

const express = require('express');
const app = express();

const data = require("../models/mongoose");

const get_signUp = (req, res) => {
  res.render("signup");
}

const get_login = (req, res) => {
  res.render("login");
}

const post_signUp = async (req, res) =>{
  const signUpUser = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    password: req.body.password, 
  }
  await data.insertMany([signUpUser]);
   res.render("Home");
}

const post_login = async(req, res) =>{
  try{
    const checkUser = await data.findOne({FirstName: req.body.FirstName});
    if(checkUser.password === req.body.password){
      res.render("Home");
    }
    else{
      res.send("Oops something went wrong");
    }
  }
  catch{
    res.render("Sorry!");
  }
}

module.exports = {
  get_signUp,
  get_login,
  post_signUp,
  post_login
}
// get_signUp, post_signUp, post_login //

const express = require('express');
const app = express();

const data = require("../models/mongoose");

const get_Home = (req, res) =>{
  res.render("Home");
}

const get_userView = (req, res) =>{
  res.render("userview");
}

const get_signUp = (req, res) => {
  res.render("signup");
}

const get_login = (req, res) => {
  res.render("login");
}

const post_signUp = async(req, res) =>{

  const signUpUser = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    password: req.body.password, 
  }
  await data.insertMany([signUpUser]);
  res.redirect("/userview");
}

const post_login = async(req, res) =>{
  try{
    const checkUser = await data.findOne({FirstName: req.body.FirstName});
    if(checkUser.password === req.body.password){
      res.render("/userview");
    }
    else{
      res.send("Oops something went wrong");
    }
  }
  catch{
    res.render("Sorry!");
  }
}

const page_redirect = (req, res)=>{
  res.redirect('/');
}

module.exports = {
  get_Home,
  get_signUp,
  get_login,
  get_userView,
  post_signUp,
  post_login,
  page_redirect
}
const express = require('express');
const router = express.Router();
const { body , validationResult } = require('express-validator');
const bycrypt = require('bcryptjs');
const JWT_SEC = 'yashu';
const jwt = require('jsonwebtoken');

const User = require('../models/User');
//***create a user using POST "/api/auth/createuser" . doesn't require Auth** */
router.post('/createuser' , [
    body('name','name must atleast 3 letters').isLength({min :3}),
    body('email','email must be type Email').isEmail(),
    body('password','password length must be atleast 5 characters').isLength({min:5}),

] ,  async(req , res)=>{
// if validation fails then gives message with array of errors
    
const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
// email exist already in database then give errors with message
try{
    //here we promise a user with email so we use await.
let user = await User.findOne({email : req.body.email});
// if user is null then show the error
if(user){
    return res.status(400).json({error : "sorry a user with this Email already exist ."})
}

const salt =await bycrypt.genSalt(10);
sequredPass = await bycrypt.hash(req.body.password , salt);
//if user not null then save user in database
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: sequredPass,
      })

      const data = {
        user:{
            id:user.id
        }
      }
     const authToken = jwt.sign(data , JWT_SEC);
    //  console.log(jwtData);
//shows the saving data in response
    //   res.json(user);
res.json({authToken});
    }catch(error){
        console.error(error.message);
        res.status(500).send("some error occured");
    }
      
    //   .then(user => res.json(user))
    //   .catch(err=>{console.log(err)
    // res.json({error : 'Please enter a unique value for Email.',message : err.message})
// })
    
//     console.log(req.body);
// const user = User(req.body);
// user.save();
// res.send(req.body);
// res.json([]);
});

module.exports = router
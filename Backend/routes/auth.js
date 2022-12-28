const express = require('express');
const router = express.Router();

const User = require('../models/User');
//***create a user using POST "/api/auth/" . doesn't require Auth** */
router.post('/' , (req , res)=>{
console.log(req.body);
const user = User(req.body);
user.save();
res.send(req.body);
// res.json([]);
});

module.exports = router
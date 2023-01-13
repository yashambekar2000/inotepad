const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bycrypt = require('bcryptjs');
const JWT_SEC = 'yashu';
var jwt = require('jsonwebtoken');
const fetchUser= require("../middleware/fetchUser")
const User = require('../models/User');
//Route 1:-***create a user using POST "/api/auth/createuser" . doesn't require Auth  no login required** */
router.post('/createuser', [
    body('name', 'name must atleast 3 letters').isLength({ min: 3 }),
    body('mobile', 'mobile number must 10 digits').isLength({min:10,max:10}),
    body('email', 'email must be type Email').isEmail(),
    body('password', 'password length must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    // if validation fails then gives message with array of errors
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ success , errors: errors.array() });
    }
    // email exist already in database then give errors with message
    try {
        //here we promise a user with email so we use await.
        let user = await User.findOne({ email: req.body.email });
        // if user is null then show the error
        if (user) {
            success = false;
            return res.status(400).json({success , error: "sorry a user with this Email already exist ." })
        }
        const salt = await bycrypt.genSalt(10);
        sequredPass = await bycrypt.hash(req.body.password, salt);
        //if user not null then save user in database
        user = await User.create({
            name: req.body.name,
            mobile:req.body.mobile,
            email: req.body.email,
            password: sequredPass,
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SEC);
        success = true;
        res.json({success , authToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }

    //     console.log(req.body);
    // const user = User(req.body);
    // user.save();
    // res.send(req.body);
    // res.json([]);
})


//Route 2 :-***Authenticate a user using POST "/api/auth/createuser" . require Auth  .no login required** */
router.post('/login', [
    body('email', 'email must be type Email').isEmail(),
    body('password', 'password cannot be blank').exists(),

], async (req, res) => {
    // if validation fails then gives message with array of errors
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
success=false;
        return res.status(400).json({success, errors: errors.array() });
    }
    //**** getting email and password from request body ********* */
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            success=false;
            return res.status(400).json({success , error: "Please login with correct credentials" });
        }
        //************ compairing password with request body password********* */
        const passCompare = await bycrypt.compare(password, user.password);
        if (!passCompare) {
            success = false;
            return res.status(400).json({ success , error: "Please login with correct credentials" });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        //****************converting user details in auth Token ************* */
        const authToken = jwt.sign(data, JWT_SEC);
        success = true;
        res.json({ success , authToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
});


//Route 3 :-********************Get logged in user details using: PoST "/api/auth/getuser" . Login required
router.post('/getuser', fetchUser ,  async (req, res) => {
    // if validation fails then gives message with array of errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
try{
   const userId =req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
} catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
}
})

module.exports = router
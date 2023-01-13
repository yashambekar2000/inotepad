var jwt = require('jsonwebtoken');
const JWT_SEC = 'yashu';
const fetchUser = (req , res , next)=>{
//get the user from jwt token and add id to request object
const token = req.header('auth-token');
if(!token){
    return res.status(401).send({error : "Please Authenticate using a valid token ."})
}

try{
    const data = jwt.verify(token , JWT_SEC);
    req.user = data.user;
    next()
}catch(error){
    return res.status(401).send({error : "Please Authenticate using a valid token ."})
}

}

module.exports = fetchUser
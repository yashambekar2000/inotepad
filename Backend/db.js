const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://yash:Yash%40123@newcluster.lolgyl2.mongodb.net/test"

const connectToMongo = ()=>{
mongoose.connect(mongoURI, () =>{
    console.log("connected to mongo successfully");
})
}

module.exports = connectToMongo;
const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase =  require('./config/database');


// setting up config file
dotenv.config({path:'backend/config/config.env'})

//  connecting to databse
connectDatabase();  

app.listen(process.env.PORT,()=>{
    console.log("server started at port",process.env.PORT,"in mode : ",process.env.NODE_ENV)
})
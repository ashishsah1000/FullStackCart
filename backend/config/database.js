const mongoose = require('mongoose');



const connectDatabase = ()=>{
    // console.log(process.env.DB_LOCAL_URI);
mongoose.connect(process.env.DB_LOCAL_URL,{
    useNewUrlParser : true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(con => {
    console.log("mongoDB database connected with HOST : ",con.connection.host)
}).catch(err=> console.log(err));
}

module.exports =  connectDatabase
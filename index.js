const express=require('express');
const dotenv=require('dotenv').config();
const route=require('./routes/contactsRoutes');
const errorHandler=require('./middleware/errorHandller');
const connectDb = require('./config/dbConnection');
connectDb();
const app=express();
const port =process.env.PORT || 5000;
app.use(express.json());
app.use(errorHandler);
app.use("/api/contacts",route);




app.listen(port,()=>{
    console.log(`app running on port${port}`);
});

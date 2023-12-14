const express=require('express');
const app=express();
const bodyparser=require('body-parser');
app.use(bodyparser.json());
const PORT=7000;

const userroute=require('./routes/citizen.router');
const userroute1=require('./routes/application.router');
const userroute2=require('./routes/app-catagory.router');
const userroute3=require('./routes/bank-ac.router');
const userroute4=require('./routes/certf-doc.router');
const userroute5=require('./routes/certf-issue.router');
const userroute6=require('./routes/certf-type.router');
const userroute7=require('./routes/colony.router');
const userroute8=require('./routes/dashboard.router');
const userroute9=require('./routes/fin-year.router');


app.use('/citizen',userroute);
app.use('/application',userroute1);
app.use('/appl-catagery',userroute2);
app.use('/bank-account',userroute3);
app.use('/certf-doc',userroute4);
app.use('/certf-issue',userroute5);
app.use('/certf-type',userroute6);
app.use('/colony',userroute7);
app.use('/dashboard',userroute8);
app.use('/fin-year',userroute9);


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})
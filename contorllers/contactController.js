const asyncHandler = require('express-async-handler');
const contact= require('../modles/contactModle');

const getContact= asyncHandler(async(req,res)=>{
    const contacts = await contact.find();
    res.status(200).json(contacts);
});

const updateContact= asyncHandler(async(req,res)=>{
    const contacts =await contact.findById(req.params.id)
    
    if(!contacts){
        console.log("id not found");
    }
    const updcontacts =await contact.findByIdAndUpdate(req.params.id,req.body,{new :true})
    res.status(201).json(updcontacts)
});
const deleteContact=asyncHandler (async(req,res)=>{
    const contacts =await contact.findById(req.params.id);
    const {name} = req.params;
    
    if(!contacts){
        console.log("id not found");
    }
    const deletecon =await contacts.deleteOne();
    res.status(201).json(deletecon)});
const indvContact=asyncHandler (async(req,res)=>{
    const{id}=req.params;
    const contacts=  await contact.findById(id);
    
    if(!contacts){
        console.log("contact not forund");
        throw new Error("contact not found");
    }
    res.status(201).json(contacts)
});
const newContact=asyncHandler (async(req,res)=>{
    console.log(req.body);
    const {name,designation,phonenumber} = req.body;
    if(!name || !designation ||!phonenumber){
        res.status(400);
        throw new Error("fil the fields");

    }
    const lmao = await contact.create({
        name,
        designation,
        phonenumber
    });
    res.status(201).json(lmao)});

 module.exports= {getContact,newContact,deleteContact,updateContact,indvContact}
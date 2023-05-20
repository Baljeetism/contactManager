const errorHandler=(err,req,res,next)=>{
    const statusCode=(res.statusCode ? res.statusCode : 500);
    switch (res.statusCode) {
        case 404:
            res.json({tittle: "error",message: err.message, stackTrace: err.stack});
            break;
    
        case 400:
            res.json({tittle: "validation error",message: err.message, stackTrace: err.stack});
            break;
        default:
            console.log("no error");
            break;
    }
    

}
module.exports=errorHandler;
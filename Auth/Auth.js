const jwt = require("jsonwebtoken");
// const user = require("../models/user_models")

const verifyToken = (req,res,next)=>{
    const authHeader = req.headers.token;

    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token," ",(err,check)=>{
            if(err) res.status(403).json("Token is not valid!");
            req.check = check;
            next();
        });

    }else{
        return res.status(401).json("You are not valid user"); 
    }
}

const verifyTokenAndAuthorication = (req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id ===req.params.id || req.user.isAdmin ){
            next();
        }else{
            res.status(401).json("You are not allow to change")
        }
    });
};


const verifyTokenAndAdmin =async (req,res,next)=>{
    verifyToken(req,res,()=>{
        console.log("admin");
        if(req.check.isAdmin ){
            next();
        }else{
            res.status(401).json("You are not admin.....!")
        }
    });
};
module.exports ={verifyToken,verifyTokenAndAuthorication,verifyTokenAndAdmin};
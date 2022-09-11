const user = require("../models/user_models")
const CryptoJS = require("crypto-js"); 
const jwt = require("jsonwebtoken");

module.exports={
  Register:async(req,res)=>{
    console.log("wowo");


  
    let myemail=await user.findOne({email:req.body.email})
    let myroomid = await user.findOne({roomid:req.body.roomid})

    if(myemail){
      return res.status(400).json('That email already exisits!');


    }else if(myroomid){
      return res.status(400).send({message:'That RoomId is already exisits!'});

    }
    
    else{
   const newuser =  new user({
    email:req.body.email,
    roomid:req.body.roomid,
    roomidPassword:CryptoJS.AES.encrypt(req.body.roomidPassword,"lama").toString()
    
  })
    try{
     
      const saveuser =await newuser.save()
      res.status(200).send({saveuser,message:"Tenant Added Successfull"});

    }catch(e)
    {
      console.log(e);


    }}
      },
Login: async(req,res)=>{
  try{
    console.log("hello");
      const check = await user.findOne({
          roomid:req.body.roomid
      });
      !check && res.status(401).json("Wrong Room id");


      const hashPassword = CryptoJS.AES.decrypt(check.roomidPassword,"lama");
      const chpassword = hashPassword.toString(CryptoJS.enc.Utf8);
      
      chpassword !== req.body.roomidPassword && res.status(401).json("Wrong password 123");

      const accessToken = jwt.sign({
          id:user._id,
          isAdmin:check.isAdmin,
      }," ",
      {expiresIn:"3d"});
      const { roomidPassword, ...others }=check._doc;

            res.status(200).json({...others,accessToken,message:"Welcome ✌️✌️"});

      // const { roomidPassword, ...others }=user._doc;

          // res.status(200).json({data:check,token:accessToken,message:"login done"});

  }catch(e){
      // res.status(500).json(e);
      console.log(e);
  }
}

}     
    

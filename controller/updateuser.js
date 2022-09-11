const user = require("../models/user_models")

module.exports={
    // get user
getuser:async(req,res)=>{
    const newuser = req.query.new;


    try{
    //  const Myuser= await user.findById(req.params.id);
    //  const {roomidPassword , ...others } = Myuser._doc;
    const getUsers = await user.find({isAdmin:false});

    res.status(200).send(getUsers);

    //  res.status(200).json(user);
    }catch(e){
      res.status(400).json(e)
    }
  
  },
  // deleteTenantall
deleteuser:async(req,res)=>{

  console.log("delete user");
  try{
    await user.findByIdAndDelete(req.params.id);
    res.send("Tenant has been Deleted")

  }catch(e){
    console.log(e);


  }

},
deleteall:async(req,res)=>{
  try{
    await user.deleteMany();
    res.send("all user has been deleted")

  }catch(e){
    console.log(e);
  }
},
editTenant:async(req,res)=>{
  try{
    const editTenants =await user.findByIdAndUpdate(req.params.id,{
      $set: req.body,

    },{new:true});
    res.send({editTenants,message:"Tenant Updated"});

  }catch(e){
    console.log(e);
  }


}

}
import User from "./../models/usermodel.js"
export const signup= async (req,res)=>{
  try{
       const {fullname,username,password,confirmPassword,gender}=req.body;
        if(password!== confirmPassword){
        return res.status(400).json({error:"Passwords don't match"})
     }

     const user=await User.findOne({username});
     if(user){
        return res.status(400).json({error:"Username already exists"})
     }

     //hash password

     const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
     const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

     const newUser=new User({
        fullname,username,password,gender,profilePic:gender==="male"?boyProfilePic:girlProfilePic
     })

     await newUser.save();

     res.status(201).json({
        _id:newUser._id,
        fullname:newUser.fullname,
        username:newUser.username,
        profilePic:newUser.profilePic
             })
  }
  catch(error){

  }
}

export const login=(req,res)=>{
  console.log("Login Page")
}

export const logout=(req,res)=>{
  console.log("Logout Page")
}

 

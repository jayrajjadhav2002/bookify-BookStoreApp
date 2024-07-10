import { model, mongoose } from 'mongoose';

const userSchema=({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
})
const User=mongoose.model("User",userSchema); 

export default User;
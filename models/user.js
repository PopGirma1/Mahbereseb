const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:[true,"Please add a firstName"],
        maxlength:[30,"firstName Can not be more than 40 characters"],
    },
    lastName:{
        type:String,
        require:[true,"Please add a lastName"],
        maxlength:[30,"lastName Can not be more than 40 characters"],
    },

    userName:{
        type:String,
        require:[true,"Please add a userName"],
        unique:true,
        trim:true,
        maxlength:[30,"userName Can not be more than 40 characters"],
    },
    phoneNumber:{
        type:Number,
        require:[true,"Please add a Phone Number and it should be a unique"],
        maxlength:[10,"Phone Number Can not be more than 10 characters"],
        minlength:[10,"phoneNumber can not have less than 10 chacters"],
        unique:true
    },

    email:{
        type:String,
        require:[true,"Please  Add an Email"],
        unique:true,
        trim:true,
    },

    password:{
        type:String,
        require:[true,"Please add a Password"],
        trim:true,
        minlength:[8,"a Password should be more than 8 characters"]
    }

})

module.exports=mongoose.models.User || mongoose.model("User", UserSchema);
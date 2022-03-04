const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    firstName:{
        type:String,
        require:[true,"Please add a firstName"],
        maxlength:[30,"firstName Can not be more than 30 characters"],
    },
    lastName:{
        type:String,
        require:[true,"Please add a lastName"],
        maxlength:[30,"lastName Can not be more than 30 characters"],
    },

    userName:{
        type:String,
        require:[true,"Please add a userName"],
        unique:true,
        trim:true,
        maxlength:[30,"userName Can not be more than 30 characters"],
    },
    phoneNumber:{
        type:Number,
        require:[true,"Please add a Phone Number and it should be a unique"],
        unique:true,
        maxlength:[10,"max length of phone should be 10 and unique"],
        minlength:[10,"min length of phone 10 and it should be unique"]
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

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);
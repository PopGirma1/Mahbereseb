const mongoose = require('mongoose');

const createpost=new mongoose.Schema({
    title:{
        type:String,
        require:[true,"Please add a title"],
        maxlength:[30,"title Can not be more than 30 characters"],
    },
    descrption:{
        type:String,
        require:[true,"Please add a descrption"],
    },
});

module.exports = mongoose.models.Post || mongoose.model('Post', createpost);

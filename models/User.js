const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type: String,
        maxlength: 20
    },
    email:{
        type: String,
        trim: true, //공백을 없애주는 역할
        unique : true
    },
    password:{
        type: String,
        minlength: 5
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{
        type: Number
    }
});
//스키마를 모델로 감싸주기
const User = mongoose.model('User',userSchema); 

module.exports= {User};
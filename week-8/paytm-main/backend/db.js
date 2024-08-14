const mongose = require("mongoose");

mongose.connect("mongodb+srv://krishaagja12:dHEvjeaj8XQgdFQx@cluster0.karuet2.mongodb.net/paytm")

const userSchema = new mongose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema = new mongose.Schema({
    userId: {
        type: mongose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance : {
        type: Number,
        required: true
    }
})

const Account = mongose.model('Account', accountSchema)
const User = mongose.model('User', userSchema)

module.exports ={ 
    User,
    Account
}
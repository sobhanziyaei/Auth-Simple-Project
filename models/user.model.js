// در اینجا اطلاعات کاربری که می خواهد در پروژه تعریف شود را قرار میگیرید

const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    fullName: { type: String },
    email: { type: String },
    password: { type: String },
},
    { timestamps: true }
)

const userModel = mongoose.model("User", userSchema)

module.exports = {
    userModel
}
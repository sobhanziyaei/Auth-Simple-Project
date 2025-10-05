// در اینجا اطلاعات کاربری که می خواهد در پروژه تعریف شود را قرار میگیرید

const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
},
    { timestamps: true }
)

const userModel = mongoose.model("User", userSchema)

module.exports = {
    userModel
}
const { userModel } = require("../models/user.model");
const { hashPassword, comparePassword, signToken } = require("../utils/auth.util");

login = async (req, res, next) => {
    try {
        console.log('Login request received:', req.body);
        const { email, password } = req.body;
        const user = await userModel.findOne({
            email,
        });

        if (!user) {
            console.log('User not found for email:', email);
            throw { status: 400, message: "کاربری با این ایمیل یافت نشد" };
        }

        console.log('User found, comparing password');
        if (comparePassword(password, user.password)) {
            const token = signToken({ id: user._id, email: user.email });
            console.log('Login successful for:', email);
            res.send({ token, message: "login successfully" });
        } else {
            console.log('Password incorrect for:', email);
            throw { status: 400, message: "email or password is incorrect" };
        }

    } catch (error) {
        console.log('Login error:', error);
        next(error);
    }
}

register = async (req, res, next) => {
    try {
        const { fullName, email, password } = req.body;
        const user = await userModel.create({
            fullName,
            email,
            password: hashPassword(password)
        })
        res.send(user);
    } catch (error) {
        console.log(error);

        next(error);
    }
}

module.exports = {
    login,
    register
}
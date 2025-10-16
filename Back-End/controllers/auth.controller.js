const { userModel } = require("../models/user.model");
const { hashPassword, comparePassword, signToken } = require("../utils/auth.util");

login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({
            email,
        });

        if (!user) {
            throw { status: 400, message: "کاربری با این ایمیل یافت نشد" };
        }

        if (comparePassword(password, user.password)) {
            const token = signToken({ id: user._id, email: user.email });
            res.send({ token, message: "login successfully" });
        } else {
            throw { status: 400, message: "email or password is incorrect" };
        }

    } catch (error) {
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
        next(error);
    }
}

module.exports = {
    login,
    register
}
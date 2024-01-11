
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/usermodel");
// const user = require("../models/usermodel");



const generateToken = (_id) => {
    return jwt.sign({ _id }, process.env.JWT_SECRET)
}
// register user

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    //Validation

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Plese fiil all required fields")
    }
    if (password.length < 6) {

        res.status(400);
        throw new Error("Password must be up to 6 characters");

    }

    // check if user exit

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400);
        throw new Error("Email has already been registered");
    }

    //Create new user

    const user = await User.create({
        name,
        email,
        password
    })

    // Generate Token

    const token = generateToken(user._id)

    if (user) {
        const { _id, name, email, role } = user
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 864000),
            // secure: true,
            // sameSite:none,
        })
        //Send userdata

        res.status(201).json({
            _id, name, email, role, token,
        })
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }

    res.send("Register User..")
})

// registerUserC

// register user

const registerUserC = asyncHandler(async (req, res) => {
    const { name, email,phone} = req.body;

    //Validation

    if (!name || !email|| !phone) {
        res.status(400)
        throw new Error("Plese fiil all required fields")
    }
    // if (password.length < 6) {

    //     res.status(400);
    //     throw new Error("Password must be up to 6 characters");

    // }

    // check if user exit

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400);
        throw new Error("Email has already been registered");
    }

    //Create new user

    const user = await User.create({
        name,
        email,
        phone
        
    })

    // Generate Token

    const token = generateToken(user._id)

    if (user) {
        const { _id, name, email, role,phone } = user
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 864000),
            // secure: true,
            // sameSite:none,
        })
        //Send userdata

        res.status(201).json({
            _id, name, email, role, token,phone
        })
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }

    res.send("Register User..")
})
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Validate Request

    if (!email || !password) {
        res.status(400)
        throw new Error("Plese add email and password");
    }

    // Check User exist

    const user = await User.findOne({ email });
    if (!user) {
        res.status(400)
        throw new Error("User does not exit");
    }

    // User exist, check password is correct

    const passwordIsCorrect = await bcrypt.compare(password, user.password);

    // Generate Token

    const token = generateToken(user._id);

    if (user && passwordIsCorrect) {
        const newUser = await User.findOne({ email }).select("-password");
        res.cookie("token", token, {
            path: "/",
            httpOnly: true,
            expires: new Date(Date.now() + 1000 * 864000),
            // secure: true,
            // sameSite:none,
        })
        //Send userdata

        res.status(201).json(user);
    } else {
        res.status(400)
        throw new Error("Invalid email and password");
    }


})

// Logout Userse
const logout = asyncHandler(async (req, res) => {
    res.cookie("token", "", {
        path: "/",
        httpOnly: true,
        expires: new Date(0)
        // secure: true,
        // sameSite:none,
    })
    return res.status(200).json({ message: "Successfully Logged Out" })
})

// Get User

const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id).select("-password")
    if (user) {
        res.status(200).json(user);
    } else {
        throw new Error("User not found");
    }
})

// Get Login Status

const getLoginStatus = asyncHandler(async (req, res) => {
    const token = req.cookies.token
    if (!token) {
        return res.json(false)

        // verify token
    }
    const verified = jwt.verify(token, process.env.JWT_SECRET)

    if (verified) {
        res.json(true)
    }
    else {
        res.json(false)
    }
})

// update user

const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        const{name,phone,address}= user;
        user.name =  req.body.name || name;
        user.phone =  req.body.phone || phone;
        user.address =  req.body.address || address;
        
        const updatedUser = await user.save()
        res.status(200).json(updatedUser)
    }else{
        es.status(404);
        throw new Error("User not found")
    }
})

// update photo
const updatePhoto = asyncHandler(async (req, res) => {
    const{photo} = req.body;

    const user = await User.findById(req.user._id);
    user.photo= photo;

    const updatedUser = await user.save()
    res.status(200).json(updatedUser)
})

module.exports = {

    registerUser,
    registerUserC,
    
    loginUser,
    logout,
    getUser,
    getLoginStatus,
    updateUser,
    updatePhoto,
}
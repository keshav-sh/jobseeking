import mongoose, { mongo } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: [3, "At least 3 characters !"],
        maxLength:[50, "Cannot exceed 30 characters"],
    },
    email:{
        type: String,
        required: [true, "Your Email"],
        validate: [validator.isEmail,"Please provide a valid email"],
    },
    phone:{
        type: Number,
        required: [true, "Phone number"],
    },
    password:{
        type: String,
        required:[true,"Password"],
        minLength: [6, "At least 6 characters !"],
        maxLength:[50, "Cannot exceed 30 characters"],
        select: false,// password not seen in request
    },
    role:{
        type: String,
        required: [true, "Plz provide your role"],
        enum:["Job seeker","Employer"],
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

//hashing password
userSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
});

//comparing password

userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

//jwt generating for authorization
userSchema.methods.getJWTToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET_KEY,{
        expiresIn: process.env.JWT_EXPIRE,
    });
};

export const User = mongoose.model("User", userSchema);
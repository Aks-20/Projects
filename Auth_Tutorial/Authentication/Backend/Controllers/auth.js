import { user } from "../Models/user.model.js";
import bcryptjs from 'bcryptjs';
import { generateTokenAndSetCookie } from "../Utils/generateTokenAndSetCookie..js";
import { sendVerificationEmail, sendWelcomeEmail } from "../Mailtrap/emails.js";

export const signup = async (req, res) => {
    const { email, password, name } = req.body;
    try {
        if (!email || !password || !name) {
            throw new Error("All fields are required");
        }

        const userAlreadyExist = await user.findOne({ email });
        if (userAlreadyExist) {
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }

        const hashedPassword = await bcryptjs.hash(password, 10); // Hash the password
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const User = new user({
            email,
            password: hashedPassword,
            name,
            verificationToken,
            verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
        });

        await newUser.save(); // Save the new user instance
        // Assuming generateTokenAndSetCookie is defined elsewhere
        generateTokenAndSetCookie(res, User._id); // Use newUser._id
        await sendVerificationEmail(User.email,verificationToken)
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...User.toObject(), // Convert Mongoose document to plain object
                password: undefined // Exclude password from response
            }
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const verifyUser = async (req, res) => {
    const {code}=req.body;
    try {
        const user=await user.findOne({
            verificationToken:code,
            verificationTokenExpiresAt:{$gt:Date.now()}
        })
if(!user){
    return res.status(400).json({
        success: false,
        message: "Invalid verification code or expired"
    })
}
user.isVerified=true;
user.verificationToken=undefined;
user.verificationTokenExpiresAt=undefined;
await user.save();

await sendWelcomeEmail(user.email,user.name);

res.json(200).json({
    success:true,
    message:"Email Verified Successfully",
    user:{
        ...user._doc,
        password:undefined ,// Exclude password from response
    }
})
    } catch (error) {
        res.status(500).json({message:"Server Error", })
    }
}


export const login = (req, res) => {
    res.send("login route");
};

export const logout = (req, res) => {
   res.clearCookie("token")
   res.status(200).json({success:true,message:"Logged out successfully"});
};  
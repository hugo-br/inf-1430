import mongoose from "mongoose";
import bcrypt from "bcrypt";
import config from "config";


const UserSchema = new mongoose.Schema(
    {
        email: {type: String, require: true, unique: true},
        name: {type: String, require: true},
    }
)
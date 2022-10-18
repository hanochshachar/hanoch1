import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('users', userSchema);
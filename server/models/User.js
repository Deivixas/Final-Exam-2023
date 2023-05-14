import mongoose from "mongoose";
const {Schema} = mongoose;

const userSchema = new Schema({
    name: {
        type: String, required : ['Name is required']
        
      },
      
      password: {
        type: String,required : ['Password is required']
        
      },
      createdAt: {type: Date, default: Date.now},
    });

    export default new mongoose.model ('User', userSchema);

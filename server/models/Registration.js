import mongoose from "mongoose";
const {Schema} = mongoose

const registrationSchema = new Schema({
    name: {
        type: String,
        require: true,
      },
      surname: {
        type: String,
        require: true,
      },
      email: {
        type: String,
       require: true,
      },
      date: {
        type: Date,},createdAt: {type: Date, default: Date.now},
    });

    export default new mongoose.model ('Registration', registrationSchema);

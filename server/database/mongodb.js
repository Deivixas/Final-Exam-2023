import mongoose from 'mongoose';

async function connect(){
await mongoose.connect("mongodb+srv://deividas:deividas123@final-exam.jfaeryp.mongodb.net/?retryWrites=true&w=majority");
console.log('MongoDB connection is successful');


}

export default connect;


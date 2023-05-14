import {Router} from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = Router();


router.post('/register', async (req,res)=>{
const {name,password} = req.body;
const userExists = await User.findOne({name});
if(userExists){
    res.status(406).json({message: 'User already exists.'});
    return;
}


const saltRounds = 10;
const salt = await bcrypt.genSaltSync(saltRounds);
const hashedPassword = await bcrypt.hashSync(password, salt);



 const user = await User ({name,password: hashedPassword});
await user.save();
res.status(201).json({'message':'user is created'});
});

router.post('/login',async(req,res)=>{
    const {name,password} = req.body
    const user = await User.findOne({name});
    if(!user){
        res.status(406).json({message: 'User not found'});
        return;
    }
const matched = await bcrypt.compare(password, userExists.password)
if (!matched) {
    res.status(406).json({message: 'User not found'});
        return;
}


const payload = {
    name,
    _id: user._id,
};
const token = jwt.sign({payload},'some secret')
res.json({message:'successfully logged in.', token});
});


export default router;
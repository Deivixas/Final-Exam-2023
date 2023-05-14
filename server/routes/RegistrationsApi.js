import {Router} from 'express'
import Registration from '../models/Registration.js';

const router = Router();


router.get ('/', async(req,res)=>{
    const registration= await Registration.find({}).sort({createdAt : -1});
    res.json({data:registration});
});


router.post('/', async (req,res)=>{
    const {name,surname,email,date} = req.body;
    const registration = new Registration ({
        name,surname,email,date
    });
    await registration.save();
    res.json({message: 'Success'});
    });

router.delete('/:id', async(req,res)=>{
    await Registration.deleteOne({_id: req.params.id});
    res.json({message:'success'});
});

router.patch('/:id',async (req,res) =>{
    await Registration.updateOne({_id: req.params.id}, {$set: req.body});
    res.json({message:'success'});
});



    export default router;
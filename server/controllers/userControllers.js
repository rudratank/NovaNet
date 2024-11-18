import User from '../models/userModels.js'

const createUser = async (req,res) => {
    const email=req.body.email;
    const findUser=await User.findOne({email:email});

    if(!findUser){
        //Crreate New User
        const newUser =await User.create(req.body);
        res.json(newUser);
    }
    else{
        //User Already Exists
        res.json({
            msg: 'User Already Exits.',
            success:false
        });
    }
};

export default createUser;
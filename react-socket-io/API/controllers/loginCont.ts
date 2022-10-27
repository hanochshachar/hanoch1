import { userModel } from "../models/userModel";
export const addUser = async (req, res) =>{
    try {
        const {name, password} = req.body;
        const userAdded = await userModel.create({name, password});
        userAdded && console.log({ok:true})
        userAdded || res.send('wrong')
    } catch (error) {
        res.send({error: error.message})
    }
};

export const findUser = async (req, res) => {
    try {
        const {name} = req.query;
        const user = await userModel.find({name});
        res.send(user)
    } catch (error) {
        res.send({error: error.message})        
    }
}
import {lessonsModel, cartModel, coachModel} from '../model/model';
import jwt from 'jwt-simple';


export async function addEvents(req, res){
    try {
        const { lesson,day, dateS2, dateE2,hour, price, coach} = req.body;//
        await lessonsModel.create({lesson,day, dateS2, dateE2,hour, price, coach});//
        res.send({ok: true})
    } catch (error) {
        res.send({error: error.message})
    }
}
export async function eventList(req, res){
    try {
        const events = await lessonsModel.find({});
        res.send(events)
    } catch (error) {
        res.send({error: error.message})
    }
}

export async function addToCart(req, res) {
    try {
        const {_id} = req.body;
        const Cart = await lessonsModel.findById(_id);
        const lesson = Cart.lesson;
        const dateStart = Cart.dateS2;
        const dateEnd = Cart.dateE2;
        const hour = Cart.hour;
        const day = Cart.day;
        const price = Cart.price;
        
        const {user} = req.cookies;
         await cartModel.create({lesson,day,dateStart,dateEnd,hour, price, user});
        res.send({ok: true})

    } catch (error) {
        res.send({error: error.message})
        
    }
}

export async function cartByUser(req, res){
    
    try {
        const {user}  = req.cookies;
        const userCart = await cartModel.find({user});

        res.send(userCart);

    } catch (error) {
        res.send({error: error.message})
        
    }
};

export async function deleteForCoach(req, res){
    try{
        const _id = req.body;
        console.log(_id);
        await lessonsModel.deleteOne({_id:_id})
    }catch (error) {
        res.send({error: error.message})
        
    }
};

export async function deleteFromCart(req, res){
    try{
        const _id = req.body;
        console.log(_id);
        await cartModel.deleteOne({_id: _id})
    }catch (error) {
        res.send({error: error.message})
        
    }
}

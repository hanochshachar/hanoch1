import { messageModel } from "../models/messageModel";

export const addMessage = async (req, res) => {
        try {
            const {name, date, senderID, receiverID} = req.body;
            const message = await messageModel.create({name, date, senderID, receiverID});
            message && res.send({ok: true, message: 'the message has added to DB'})
        } catch (error) {
            res.send({error: error.message})
        }
};

export const findMessages = async (req, res) => {
    try {
        const {date, senderID, receiverID} = req.query;
        const messages = messageModel.find({
            senderID: {$all: [senderID. receiverID]},
            receiverID: {$all: [receiverID, senderID]}});
        res.send(messages)    
    } catch (error) {
        res.send({error:error.message})
    }
} 
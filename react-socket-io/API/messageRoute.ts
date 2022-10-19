import express from 'express';
const router = express.Router();
import { addUser, findUser } from './controllers/loginCont';
import { addMessage, findMessages } from './controllers/messageCont';

router.post('/add-user', addUser)
      .get('/find-user', findUser)
      .post('/add-message', addMessage)
      .get('/find-messages', findMessages)

export default router;
import express from 'express';
const router = express.Router();

import { postBook } from '../controlers/bookCont';
import { getBook } from '../controlers/bookCont';


router.post('/booksStore', postBook)
router.get('/booksStore', getBook)

export default router;
import express from 'express';
import { createQuote, fetchQuotes } from '../controller/quoteController.js'; 

const router = express.Router();

router.post('/createQuote', createQuote);

router.get('/', fetchQuotes);

export default router;

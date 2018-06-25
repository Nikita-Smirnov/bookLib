import express from 'express';

import * as BookController from '../controllers/bookController';

const router = express.Router();

router.get('/books', BookController.getAllBooks);//Маршрут получения всех книг из библиотеки
router.get('/book/:id', BookController.getBook);//Маршрут получения определенной книги из библиотеки

export default router;
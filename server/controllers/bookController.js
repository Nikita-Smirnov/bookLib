import express from 'express';
import books from '../books';

/**
 * Метод получения всех книг из библиотеки
 *
 * @param req
 * @param res
 */
export const getAllBooks = (req, res) =>{
    if(books == []){
        return res.send('Нет книг в библиотеки!');

    }
    res.json(books);
};

/**
 * Метод получения определенной книги из библиотеки
 *
 * @param req
 * @param res
 */

export const getBook = (req, res) =>{
    var book = books.find(function(book){
        return book.id === Number(req.params.id);
    });
    if(!book){
        return res.send(`В библиотеки нет книги с ID - ${req.params.id}!`);
    }
    res.json(book);
};
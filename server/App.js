import express from 'express';
import config from './config/config';
import bookRoute from './routes/bookRoute'

const app = express();

//Сервер
const server = app.listen(config.port, err => {
    if(err) throw err;

    console.log(`Сервер успешно запущен. Порт ${config.port}`);
});


app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    next();
});
app.use('/api', bookRoute);
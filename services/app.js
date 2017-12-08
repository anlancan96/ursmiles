import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import compression from 'compression';
import errorHandler from './config/errorHandler';
import services from './api';
import process from './environment';

const app = express();

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret: process.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }));

app.use(errorHandler);

app.use(services);

app.use('', (req, res) => {
    res.send('Not Found!');
});

app.set('port', 8080);

app.listen(app.get('port'), (err)=>{
    if(err) throw err;
    console.log('> Ready on http://localhost:%s',app.get('port')); 
})
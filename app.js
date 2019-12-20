const express = require('express');
const app = express();
const port = 9090;

const cnts = require('./controllers/cnts.controller.js');


app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('public'));

app.get('/', cnts.cnts);

app.get('/cam-nang-tuyen-sinh', cnts.cnts);

app.get('/tu-van-chuong-trinh-cntt', cnts.tvctcntt);

app.get('/thong-tin-tuyen-sinh', cnts.ttts);


app.listen(process.env.PORT || port, ()=>console.log("Server is listening on port: " + port));

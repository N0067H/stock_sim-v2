const express = require('express');
const app = express();
const root_router = require('./routes/root.js');
const stock_router = require('./routes/stock.js');
const session = require('express-session');
const start_stock = require('./lib/updownstock.js')


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); //x-www-form-urlencoded 방식, 그래서 객체 형태로 결과나옴
app.use(express.json());
app.use(session({
  secure: false,  // https 환경에서만 session 정보를 주고받도록처리
  secret: 'stock-3c-sim-v2',
  resave: false,
  saveUninitialized: true,
  // cookie: {
  //   maxAge: 1000 * 60 * 60 * 24, // 24 hours
  //   secure: true,
  //   httpOnly : true
  // },
  // store: new MongoStore({
  //   url: 'mongodb://localhost/sessions'
  // })
}));

app.use('/', root_router);
app.use('/stock', stock_router);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

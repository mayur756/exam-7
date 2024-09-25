const express = require('express');
const connectDB = require('./config/db');
const userRouter = require('./router/userRouter');
const peroductRouter = require('./router/productRouter');
const app = express();

app.get('/', (req, res) => {
  res.render('index')
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

    
app.use('/user', userRouter);
app.use("/product" , peroductRouter);


app.listen(8090, () => {
  console.log(`Server is running on port 8090 `);
  connectDB();
});



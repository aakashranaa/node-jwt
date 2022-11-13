import express from 'express';
import "reflect-metadata";
import categoryRouter from './categories/routes';
import authRouter from './auth/routes';
import { dataSource } from './database/data-source';
import { errorHandler } from './middlware/error-handler';
import bodyParser from 'body-parser';

dataSource.initialize().then(() => {console.log('connection successful with database')})
                       .catch((err) => {console.log('error in initialising database', err)})

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/categories', categoryRouter);
app.use('/auth', authRouter);

app.use(errorHandler);

app.listen(port, () => {
  return console.log(`The 🚀 express server is listening at http://localhost:${port}`);
});

import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import middleware  from './middleware';

const app = express();

app.use(cors());

app.use((req, res, next) => {
  middleware(req, res);
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = process.env.PORT || 4000;

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`),
);
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_request, response) => {
  response.send('Hello Tickets API');
});

app.listen(PORT, () => {
  console.info(`Server started on ${PORT} port`);
});

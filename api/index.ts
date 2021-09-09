import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import { useRoutes } from './routes/index';

const app = express();

const uri = `${process.env.DB_URI}`;
mongoose.connect(uri);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

useRoutes(app);

app.get('/', (_request, response) => {
  response.send('Hello Tickets API');
});

export { app as api };

import express from 'express';
import cors from 'cors';

import { useRoutes } from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

useRoutes(app);

app.get('/', (_request, response) => {
  response.send('Hello Tickets API');
});

export { app as api };

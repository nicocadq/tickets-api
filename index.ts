import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const { PORT } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tickets = [
  {
  "ticketId" : "xk3d03",
  "subject" : "Hola, mi item esta roto",
  "date" : "2020-03-01 01:30:00Z",
  "from" : "Joaquin Perez",
  "status" : "SOLVED",
  "body": "Mi producto llego roto, no funciona como debería"
  },
  {
  "ticketId" : "xx35",
  "subject" : "Hola, mi item no llego",
  "date" : "2020-03-02 05:30:00Z",
  "from" : "Romina Esperanto",
  "status" : "NEW",
  "body": "Mi producto no llegó, cuando debería llegar?"
  }
];

app.get('/tickets', (_request, response) => {
  response.status(200).json(tickets);
});

app.get('/', (_request, response) => {
  response.send('Hello Tickets API');
});

app.listen(PORT, () => {
  console.info(`Server started on ${PORT} port`);
});

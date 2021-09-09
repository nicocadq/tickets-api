import { RequestHandler } from 'express';

import Ticket from '../models/Ticket';

const index: RequestHandler = async (_request, response) => {
  try {
    const tickets = await Ticket.find();

    response.status(200).json(tickets);
  } catch (error) {
    response.status(500).json(error);
  }
};

export default {
  index,
}

import { Express } from 'express';

import ticketsRoutes from './tickets'

const useRoutes = (app: Express) => {
  app.use('/api/tickets', ticketsRoutes);
};

export { useRoutes };

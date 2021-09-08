import 'dotenv/config';

import { api } from './api/index';

const { PORT } = process.env;

api.listen(PORT, () => {
  console.info(`Server started on ${PORT} port`);
});

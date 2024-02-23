import { SERVER_PORT } from './config';
import app from './routes';
app.listen(SERVER_PORT, () => {
  console.info(`Server running on port ${SERVER_PORT}`);
});


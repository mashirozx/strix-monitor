import { logger } from '@/utils/logger';
import { randomUUID } from 'crypto';
import { WebSocketServer } from 'ws';
import { getSensorValues } from './aida64';

const wss = new WebSocketServer({
  port: 8080,
});

logger.info('Server started on port 8080');

wss.on('connection', (ws, req) => {
  const id = randomUUID();
  const flag = `[${id}]`;

  logger.success(flag, 'connected', {
    address: req.socket.remoteAddress,
    port: req.socket.remotePort,
    // ua: req.headers['user-agent'],
  });

  const timer = setInterval(async () => {
    try {
      const data = await getSensorValues();
      ws.send(JSON.stringify(data), (error) =>
        error ? logger.error(flag, error) : logger.info(flag, 'sent'),
      );
    } catch (error) {
      logger.error(flag, error);
    }
  }, 1000);

  ws.on('error', (error) => logger.error(flag, error));

  ws.on('close', () => {
    logger.info(flag, 'closed');
    clearInterval(timer);
  });
});

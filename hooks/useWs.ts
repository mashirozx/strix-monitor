import { logger } from '@/utils/logger';
import { moment } from '@/utils/moment';
import { useCallback, useEffect, useRef, useState } from 'react';

const flag = '[ws]';

export const useWs = () => {
  const ws = useRef<WebSocket>();

  const [data, setDate] = useState<Aida64>();

  const connect = useCallback(() => {
    ws.current = new WebSocket('ws://localhost:8080');

    ws.current.onmessage = (event) => {
      const data = JSON.parse(event.data) as Aida64;
      logger.info(flag, 'received', {
        local: moment().format('HH:mm:ss'),
        sensor: data.STIME.value,
        data,
      });
      setDate(data);
    };

    ws.current.onopen = () => {
      logger.success(flag, 'connected');
    };

    ws.current.onerror = (error) => {
      logger.error(flag, error);
      ws.current?.close();
    };

    ws.current.onclose = (event) => {
      logger.warn(flag, 'close', event.code, event.reason);
      logger.info(flag, 'reconnecting');
      connect();
    };
  }, []);

  useEffect(connect, [connect]);

  return { data };
};

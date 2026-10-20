import { setupServer } from 'msw/node';
import { handler } from './handler';

export const startMswServer = async () => {
  const worker = setupServer(handler);

  return worker.listen();
};

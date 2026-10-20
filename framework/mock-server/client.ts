import { setupWorker } from 'msw/browser';
import { handler } from './handler';

export const startMswClient = async () => {
  const worker = setupWorker(handler);

  return worker.start();
};

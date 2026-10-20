import Fastify from 'fastify';
import buildHtmlDoc from './buildHtmlDoc';
import renderApp from './renderApp';
import * as fs from 'fs';
import { startMswServer } from '../mock-server/server';
import { wipeCache } from '../../caching-fetch-library/cachingFetch';

const runServer = async () => {
  // start the msw server
  await startMswServer();

  const fastify = Fastify({
    logger: true,
  });

  // serve the framwork runtime
  const clientJs = fs.readFileSync('./dist/client.js');
  fastify.get('/client.js', async (request, reply) => {
    reply.header('content-type', 'text/javascript').send(clientJs);
  });

  // serve the service worker for msw to work in the browser
  const mswJs = fs.readFileSync('./dist/mockServiceWorker.js');
  fastify.get('/mockServiceWorker.js', async (request, reply) => {
    reply.header('content-type', 'text/javascript').send(mswJs);
  });

  // serve a static landing page to provide links to the two versions of the app
  fastify.get('/', async (request, reply) => {
    reply
      .header('content-type', 'text/html')
      .send(
        buildHtmlDoc(
          [
            `<h1>Welcome to the People Directory</h1><p>Visit <a href="/appWithSSRData">/appWithSSRData</a> to see data loaded on the server</p><p>Visit <a href="/appWithoutSSRData">/appWithoutSSRData</a> to see data loaded on the client</p>`,
          ],
          false,
        ),
      );
  });

  // serve the application, with data loader on the server
  fastify.get('/appWithSSRData', async (request, reply) => {
    wipeCache();
    reply
      .header('content-type', 'text/html')
      .send(buildHtmlDoc(await renderApp(true)));
  });

  // serve the application, without data loader on the server
  fastify.get('/appWithoutSSRData', async (request, reply) => {
    wipeCache();
    reply
      .header('content-type', 'text/html')
      .send(buildHtmlDoc(await renderApp(false)));
  });

  fastify.listen({ port: 3000 }, (err, address) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    console.log(`Server is now listening on ${address}`);
  });
};

runServer();

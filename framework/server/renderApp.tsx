import App from '../../application/App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { serializeCache } from '../../caching-fetch-library/cachingFetch';

const renderApp = async (
  loadDataInServer: boolean,
): Promise<[string, string?]> => {
  // If the App has provided a preLoadServerData, call it, then acquire the cache to send to the browser
  let initialData;
  if (loadDataInServer && typeof App.preLoadServerData === 'function') {
    await App.preLoadServerData();
    initialData = serializeCache();
  }

  return [ReactDOMServer.renderToString(<App />), initialData];
};

export default renderApp;

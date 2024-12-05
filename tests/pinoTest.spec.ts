import { test, expect } from '@playwright/test';
import pino from 'pino';
import fs from 'fs';
import logger from './../logging/logger';
// Create a Pino logger instance



test('Log interactions with a public API', async ({ request }) => {
  logger.info('Starting test: Fetch a post from JSONPlaceholder API');

  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  const status = response.status();
  const body = await response.json();

  logger.info({ status }, 'Received API response');

  logger.info({ body }, 'Response body logged');

  expect(status).toBe(200);
  expect(body.id).toBe(1);

  logger.info('Test completed successfully');
});

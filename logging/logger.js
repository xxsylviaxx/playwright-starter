import pino, { destination } from 'pino';
import { multistream } from 'pino';
import pretty from 'pino-pretty';

// Define streams for console and file
const prettyStream = pretty({
    colorize: true, // Colorize console logs
  });
  
  // Define streams for console (pretty-printed) and file
  const streams = [
    { stream: prettyStream }, // Pretty-print logs to the console
    { stream: pino.destination('./logging/logs.json') }, // Logs to the file
  ];
  
  // Create a logger with multiple streams
  const logger = pino(
    { level: 'info' }, // Set log level
    multistream(streams)
  );
  
  export default logger;

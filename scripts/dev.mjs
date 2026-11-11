#!/usr/bin/env node
/**
 * Starts the Next.js dev server on port 3001.
 *
 * Next.js 16 writes development output to `.next/dev` and production output to
 * `.next`, so both commands can run without clobbering each other. This
 * launcher simply refuses to start a second instance on the same port instead
 * of breaking the one that is already running.
 */
import { spawn } from 'node:child_process';
import net from 'node:net';
import path from 'node:path';
import process from 'node:process';

const PORT = Number(process.env.PORT || 3001);

function isPortFree(port) {
  return new Promise((resolve) => {
    const server = net.createServer();
    server.unref();
    server.once('error', () => resolve(false));
    server.once('listening', () => server.close(() => resolve(true)));
    server.listen(port, '127.0.0.1');
  });
}

const free = await isPortFree(PORT);

if (!free) {
  console.error(
    `\nPort ${PORT} is already in use. The existing server was left untouched.\n` +
      `Open http://localhost:${PORT} or stop that process before starting another one.\n`
  );
  process.exit(0);
}

const nextBin = path.join(process.cwd(), 'node_modules', 'next', 'dist', 'bin', 'next');
const child = spawn(process.execPath, [nextBin, 'dev', '-p', String(PORT)], {
  stdio: 'inherit',
  env: process.env,
});

child.on('exit', (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 0);
});

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    if (!child.killed) child.kill(signal);
  });
}

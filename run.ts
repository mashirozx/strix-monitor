import consola from 'consola';
import { colorize } from 'consola/utils';
import { spawn } from 'node:child_process';

const flagWss = colorize('bgCyan', '[wss]');
const flagWeb = colorize('bgMagenta', '[web]');

const trimEmptyLines = (str: string) =>
  str
    .split(/\r?\n/)
    .filter((line) => line.trim() !== '' && !line.startsWith('> '))
    .join('\n');

const stringify = (data: Buffer) =>
  trimEmptyLines(
    data
      .toString()
      .replace(/\r?\n$/, '')
      .replaceAll('\x1Bc', ''),
  );

let lastLine = '';

const onStdout = (flag: string) => (data: Buffer) => {
  const str = stringify(data);
  if (str) {
    if (lastLine === str) {
      consola.log(`\x1b[1A\x1b[K${flag}`, str);
    } else {
      consola.log(flag, str);
    }
    lastLine = str;
  }
};

const onStderr = (flag: string) => (data: Buffer) => {
  const str = stringify(data);
  str && consola.log(flag, str);
};

const onExit = (flag: string) => (code: number) => {
  if (code === 0) {
    consola.success(flag, 'process ended with exit code 0');
  } else {
    consola.warn(flag, 'process ended with exit code', code?.toString());
  }
};

const wss = spawn('pnpm.cmd', ['wss'], { stdio: ['inherit', 'pipe'] });
const web = spawn('pnpm.cmd', ['start'], { stdio: ['inherit', 'pipe'] });

wss.stdout?.on('data', onStdout(flagWss));
wss.stderr?.on('data', onStderr(flagWss));
wss.on('exit', onExit(flagWss));

web.stdout?.on('data', onStdout(flagWeb));
web.stderr?.on('data', onStderr(flagWeb));
web.on('exit', onExit(flagWeb));

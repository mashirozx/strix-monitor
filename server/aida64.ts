import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

export const getSensorValues = async () => {
  const { stdout, stderr } = await execAsync(
    // cspell:disable-next-line
    'chcp 65001 && REG QUERY HKEY_CURRENT_USER\\Software\\FinalWire\\AIDA64\\SensorValues',
  );

  if (!stdout) {
    throw new Error(stderr, { cause: 'getSensorValues' });
  }

  const lines = stdout.split('\r\n').filter((line) => line);
  const sensorValues = lines.reduce((acc, cur) => {
    const valueArr = cur.split(/\s{2,}/).filter((line) => line);
    if (valueArr.length === 3) {
      const [type, key] = valueArr[0].split('.');

      const value = valueArr[2];
      if (!acc[key]) {
        acc[key] = {};
      }
      acc[key][type.toLowerCase()] = value;
    }
    return acc;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {} as any) as Aida64Key;

  return sensorValues;
};

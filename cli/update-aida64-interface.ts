import { getSensorValues } from '@/server/aida64';
import { logger } from '@/utils/logger';
import { ESLint } from 'eslint';
import { writeFileSync } from 'node:fs';

const main = async () => {
  try {
    const data = await getSensorValues();

    const content = `declare type Aida64 = ${JSON.stringify(data, null, 2)};`;

    const eslint = new ESLint({ fix: true, useEslintrc: true });

    const lintResult = await eslint.lintText(content, {
      filePath: 'aida64.d.ts',
    });

    const linted = lintResult[0].output;

    if (!linted) {
      const formatter = await eslint.loadFormatter('stylish');

      const formatted = await formatter.format(lintResult);

      throw new Error(formatted);
    }

    writeFileSync('aida64.d.ts', linted, { encoding: 'utf-8', flag: 'w' });

    logger.success('aida64.d.ts updated');
  } catch (error) {
    logger.error(error);
  }
};

main();

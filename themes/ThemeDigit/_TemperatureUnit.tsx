import { FontTheDisplaySt } from '@/styles/fonts';
import clsx from 'clsx';
import type { FunctionComponent } from 'react';

const TemperatureUnit: FunctionComponent = () => {
  return (
    <>
      <span
        className={clsx('align-text-top italic', FontTheDisplaySt.className)}
      >
        °
      </span>
      C
    </>
  );
};

export default TemperatureUnit;

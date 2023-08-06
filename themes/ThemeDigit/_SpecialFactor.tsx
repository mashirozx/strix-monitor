import { FontLCD, FontTektur } from '@/styles/fonts';
import { nullableString } from '@/utils/nullableString';
import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

export type SpecialFactorProps = {
  number?: string;
  label?: ReactNode;
  unit?: ReactNode;
  total?: ReactNode;
};

const SpecialFactor: FunctionComponent<SpecialFactorProps> = ({
  number,
  label,
  unit,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center gap-1">
        <span
          className={clsx(
            'font-regular text-end font-sans text-9xl',
            FontLCD.className,
          )}
        >
          {nullableString(number)}
          {unit}
        </span>
      </div>
      <span className={clsx('ml-2 font-sans text-2xl', FontTektur.className)}>
        {label}
      </span>
    </div>
  );
};

export default SpecialFactor;

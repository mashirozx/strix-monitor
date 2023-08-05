import { FontDigital7Mono, FontTektur } from '@/styles/fonts';
import { nullableString } from '@/utils/nullableString';
import clsx from 'clsx';
import type { FunctionComponent, ReactNode } from 'react';

export type NormalFactorProps = {
  number?: string;
  label?: ReactNode;
  unit?: ReactNode;
  total?: ReactNode;
};

const NormalFactor: FunctionComponent<NormalFactorProps> = ({
  number,
  unit,
  label,
  total,
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-1">
        <span
          className={clsx(
            "font-regular min-w-[theme('spacing[36]')] text-end font-sans text-6xl",
            FontDigital7Mono.className,
          )}
        >
          {nullableString(number)}
        </span>
        <div className="flex flex-col">
          <span
            className={clsx(
              'font-regular text-2xl font-medium',
              FontTektur.className,
            )}
          >
            {unit}
          </span>
          <span
            className={clsx(
              'font-regular text-1xl font-medium',
              FontTektur.className,
            )}
          >
            {total}
          </span>
        </div>
      </div>
      <span className={clsx('ml-2 font-sans text-2xl', FontTektur.className)}>
        {label}
      </span>
    </div>
  );
};

export default NormalFactor;

import type { FunctionComponent, ReactNode } from 'react';
import type { NormalFactorProps } from './_NormalFactor';
import NormalFactor from './_NormalFactor';
import type { SpecialFactorProps } from './_SpecialFactor';
import SpecialFactor from './_SpecialFactor';

type GroupProps = {
  normaFactors: NormalFactorProps[];
  specialFactor: SpecialFactorProps;
  logo: ReactNode;
};

const Group: FunctionComponent<GroupProps> = ({
  normaFactors,
  specialFactor,
  logo,
}) => {
  return (
    <div className="relative flex h-full w-1/3 flex-col justify-between rounded-2xl border-8 border-solid border-gray-400 bg-slate-300">
      <div className="mt-3 flex flex-col gap-6">
        {normaFactors.map((factor, index) => (
          <NormalFactor key={index} {...factor} />
        ))}
      </div>
      <div className="absolute right-0 top-0">{logo}</div>
      <div className="flex h-full items-center justify-center">
        <SpecialFactor {...specialFactor} />
      </div>
    </div>
  );
};

export default Group;

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
    <div className="flex w-1/3 flex-col">
      <div className="flex flex-row items-start justify-between">
        <div className="flex flex-col gap-6">
          {normaFactors.map((factor, index) => (
            <NormalFactor key={index} {...factor} />
          ))}
        </div>
        {logo}
      </div>
      <div className="flex justify-center">
        <SpecialFactor {...specialFactor} />
      </div>
    </div>
  );
};

export default Group;

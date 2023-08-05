export const keepDigit = (
  number: number,
  digit = 1,
  strategy: 'round' | 'floor' | 'ceil' = 'ceil',
) => {
  const pow = Math.pow(10, digit);

  return Math[strategy](number * pow) / pow;
};

export const keepIntNumberStringDigit = (
  string: string | undefined,
  digit = 1,
  strategy: 'round' | 'floor' | 'ceil' = 'ceil',
) => {
  const number = Number(string);

  return isNaN(number) ? string : keepDigit(number, digit, strategy).toString();
};

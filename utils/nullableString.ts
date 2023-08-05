export const nullableString = (value: string | null | undefined) => {
  if (!value) {
    return 'N/A';
  } else {
    return value;
  }
};

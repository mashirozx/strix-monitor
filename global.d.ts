declare module '*.svg' {
  const content: SVGComponent;
  export default content;
}

declare type SVGComponent = (
  props: React.SVGProps<SVGElement>,
) => React.ReactElement;

declare type Aida64Key = keyof Aida64;

declare type Aida64Value = Aida64[Aida64Key];

import { FC, ComponentType, createElement } from 'react';

// type Diff<T extends object, K extends object> = {
//   [P in keyof T]?: P extends keyof K ? K[P] : never;
// } &
//   K;

export const connect = <T extends () => object, K extends ReturnType<T>>(
  useHook: T,
) => (Component: ComponentType<K>) => {
  // @ts-ignore
  const Wrapper: FC<unknown> = props => {
    const hookProps = useHook();
    // @ts-ignore
    return createElement(Component, {
      ...hookProps,
      ...props,
    });
  };
  return Wrapper;
};

// type Diff<T extends object, K extends T> = {
//   [P in keyof T]?: K[P] extends T[P] ? T[P] : never;
// } &
//   K;

// export const connect = <T extends () => object, K extends ReturnType<T>>(
//   useHook: T,
// ) => (Component: ComponentType<K>) => {
//   const Wrapper: FC<Diff<ReturnType<T>, K>> = props => {
//     const hookProps = useHook();
//     return createElement(Component, {
//       ...hookProps,
//       ...props,
//     });
//   };
//   return Wrapper;
// };

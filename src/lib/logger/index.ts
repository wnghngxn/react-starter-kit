/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function loggerMiddleware() {
  return (next: (arg0: any) => any) => (action: any) => {
    console.log(action, 33333);
    return next(action);
  };
}

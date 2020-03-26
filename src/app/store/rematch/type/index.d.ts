/* eslint-disable */
type ModelReducers<S> = {
  [key: string]: (state: S, payload: any) => S;
};
type ModelEffects<RootState> = {
  [key: string]: (payload?: any, rootState?: RootState) => Promise<any>;
};
type ModelSelect<RootState> = {
  [key: string]: () => (rootState: RootState) => any;
};
export type ModelConfig<S, RS> = {
  state: S;
  reducers: ModelReducers<S>;
  effects: (dispatch: any) => ModelEffects<RS>;
  selectors?: (slice: any) => ModelSelect<RS>;
};
export type Models<M> = {
  [key: string]: ModelConfig<M>;
};
export type RematchRootState<M extends Models> = {
  [modelKey in keyof M]: M[modelKey]['state'];
};
export type RematchRootSelect<M extends Models> = {
  [modelKey in keyof M]: M[modelKey]['selectors'] extends Function
    ? SelectFromModel<ReturnType<M[modelKey]['selectors']>>
    : {};
};
export type SelectFromModel<S extends ModelSelect> = {
  [selectKey in keyof S]: ReturnType<ReturnType<S[selectKey]>>;
};
export type ReducerFromModel<R extends ModelReducers> = {
  [reducerKey in keyof R]: Reducer2connect<R[reducerKey]>;
};
export type ReducerFromModelKey<R extends string> = {
  [reducerKey in keyof R]: Reducer2connect<R[reducerKey]>;
};
export type EffectFromModel<E extends ModelEffects> = {
  [effectKey in keyof E]: Effect2connect<E[effectKey]>;
};

type Reducer2connect<R extends Function> = R extends (
  state: infer S,
  ...payload: infer P
) => any
  ? (...payload: P) => S
  : () => void;

export type Effect2connect<E extends Function> = E extends () => infer S
  ? () => Promise<S>
  : E extends (payload: infer P, ...args: any[]) => infer S
  ? (payload: P) => Promise<S>
  : () => Promise<any>;

export type RematchRootDispatch<M extends Models> = {
  [modelKey in keyof M]: ReducerFromModel<M[modelKey]['reducers']> &
    EffectFromModel<ReturnType<M[modelKey]['effects']>>;
};

export type RematchDispatch<ModelConfig> = ReducerFromModel<
  ModelConfig['reducers']
>;

// export type RematchDispatch<modelKey, ModelConfig> = {
// 	[modelKey in keyof modelKey]: ReducerFromModel<ModelConfig['reducers']> &
// 	EffectFromModel<ReturnType<ModelConfig['effects']>>
// }

// export type RematchDispatch<modelKey, M extends Models> = {
// 	[modelKey in keyof M]: ReducerFromModelKey<M>
// }

declare module '@rematch/core' {
  export function init<M extends Models>(config: any): any;
}

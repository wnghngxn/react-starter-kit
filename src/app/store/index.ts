import { init } from '@rematch/core';
import { FEEDBACK, SNACKBAR_VARIANT } from 'features/feedback/constances';
import { ReactNode, Dispatch as ReactDispatch } from 'react';
// import { combineReducers } from 'redux-immutable';
import plugins from './plugins';
import rootEpic from './model/rootEpic';
import { rootModel, RootModel } from './model/rootModel';
import { epicMiddleware, history, middlewares } from './middlewares';
import { reducers } from './model/reducers';
import { RematchRootState, RematchRootDispatch } from './rematch/type';

export type Dispatch = RematchRootDispatch<RootModel>;
export const store: {
  dispatch: Dispatch & ReactDispatch<unknown>;
} = init({
  models: rootModel,
  redux: {
    middlewares,
    reducers,
    // combineReducers,
  },
  plugins,
});

// eslint-disable-next-line
epicMiddleware.run(rootEpic as any);

const feedback = store.dispatch[FEEDBACK.name];

const openSnackbar = ({
  content,
  variant = SNACKBAR_VARIANT.error,
}: {
  content: ReactNode;
  variant?: SNACKBAR_VARIANT;
}) => {
  feedback.openSnackbar({
    content,
    variant,
  });
};

const openErrorSnackbar = (content: ReactNode | string) => {
  openSnackbar({
    content,
    variant: SNACKBAR_VARIANT.error,
  });
};

const openSuccessSnackbar = (content: ReactNode | string) => {
  openSnackbar({
    content,
    variant: SNACKBAR_VARIANT.info,
  });
};

const openDialog = ({
  title,
  content,
  onOk,
  footer,
  footerable,
  noWrapper,
}: {
  title: ReactNode | string;
  content: ReactNode;
  onOk: () => void;
  footer?: ReactNode;
  footerable?: boolean;
  noWrapper?: boolean;
}) => {
  feedback.openDialog({
    title,
    content,
    onOk,
    footer,
    footerable,
    noWrapper,
  });
};

const openConfirm = ({
  content,
  onOk,
}: {
  content: ReactNode;
  onOk: () => void;
}) => {
  feedback.openConfirm({
    content,
    onOk,
  });
};

export default store;
export {
  history,
  openSnackbar,
  openErrorSnackbar,
  openSuccessSnackbar,
  openDialog,
  openConfirm,
};

export type Store = typeof store;
export type RootState = RematchRootState<RootModel>;

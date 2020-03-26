import { Map } from 'immutable';
import { noop } from 'lodash';
import { ReactNode } from 'react';
import { RootState } from 'app/store';
import { SNACKBAR_VARIANT } from 'features/feedback/constances';
import { RematchDispatch, EffectFromModel } from 'app/store/rematch/type';
import { FeedbackState } from './type';
import { FeedbackVariant } from '../constances';

const { SNACKBAR, DIALOG, CONFIRM } = FeedbackVariant;
const initialSnackbarState = {
  visible: false,
  content: '',
  variant: SNACKBAR_VARIANT.info,
};
const initialDialogState = {
  visible: false,
  onOk: noop,
  content: '',
  title: '',
  okText: '',
  cancelText: '',
  footer: '',
  header: '',
  footerable: true,
  noWrapper: false,
};
const initialConfirmState = {
  visible: false,
  onOk: noop,
  content: '',
  okText: '',
  cancelText: '',
};
const initialState: FeedbackState = Map({
  [SNACKBAR]: initialSnackbarState,
  [DIALOG]: initialDialogState,
  [CONFIRM]: initialConfirmState,
}) as FeedbackState;

interface OpenConfirmPayload {
  onOk: Function;
  content: ReactNode;
  okText?: ReactNode;
  cancelText?: string;
}

interface OpenSnackbarPayload {
  content: ReactNode;
  variant?: SNACKBAR_VARIANT;
}

interface OpenDialogPayload {
  onOk: Function;
  content: ReactNode;
  title: ReactNode;
  okText?: string;
  cancelText?: string;
  footer?: ReactNode;
  header?: ReactNode;
  footerable?: boolean;
  noWrapper?: boolean;
}

const model = {
  state: initialState,
  reducers: {
    closeConfirm: (state: FeedbackState) =>
      state.mergeIn([CONFIRM], initialConfirmState),
    openConfirm: (state: FeedbackState, payload: OpenConfirmPayload) =>
      state.mergeIn([CONFIRM], {
        visible: true,
        onOk: payload.onOk,
        content: payload.content,
        okText: payload.okText,
        cancelText: payload.cancelText,
      }),
    closeDialog: (state: FeedbackState) =>
      state.mergeIn([DIALOG], initialDialogState),
    openDialog: (state: FeedbackState, payload: OpenDialogPayload) =>
      // todo
      state.mergeIn([DIALOG], {
        visible: true,
        onOk: payload.onOk,
        content: payload.content,
        title: payload.title,
        okText: payload.okText,
        cancelText: payload.cancelText,
        footer: payload.footer,
        header: payload.header,
        footerable: payload.footerable,
        noWrapper: payload.noWrapper,
      }),
    closeSnackbar: (state: FeedbackState) =>
      state.mergeIn([SNACKBAR], initialSnackbarState),
    openSnackbar: (state: FeedbackState, payload: OpenSnackbarPayload) =>
      state.mergeIn([SNACKBAR], {
        visible: true,
        content: payload.content,
        variant: payload.variant,
      }),
  },
};

export type ReducerDispatch = {
  feedback: RematchDispatch<typeof model>;
};

const effects = (dispatch: ReducerDispatch) => ({
  async handleDialogOk(payload: void, rootState: RootState) {
    rootState.feedback.getIn([DIALOG, 'onOk'])();
    dispatch.feedback.closeDialog();
  },
  async handleConfirmOk(payload: void, rootState: RootState) {
    rootState.feedback.getIn([CONFIRM, 'onOk'])();
    dispatch.feedback.closeConfirm();
  },
});
export type AffectsDispatch = {
  feedback: EffectFromModel<ReturnType<typeof effects>>;
};

export type Model = typeof model;

export default {
  ...model,
  effects,
};

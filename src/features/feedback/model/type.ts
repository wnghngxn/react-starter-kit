import { Map } from 'immutable';
import { SNACKBAR_VARIANT } from 'features/feedback/constances';
import { ReactNode } from 'react';
import { FeedbackVariant } from '../constances';

export type FeedbackState = Map<
  FeedbackVariant.SNACKBAR,
  {
    visible: boolean;
    content: ReactNode;
    variant: SNACKBAR_VARIANT;
  }
> &
  Map<
    FeedbackVariant.DIALOG,
    {
      visible: boolean;
      onOk: Function;
      content: ReactNode;
      title: ReactNode;
      okText: string;
      cancelText: string;
    }
  > &
  Map<
    FeedbackVariant.CONFIRM,
    {
      visible: boolean;
      onOk: Function;
      content: ReactNode;
      okText: ReactNode;
      cancelText: string;
    }
  >;

import { model as intlModel } from 'features/intl';
import { model as feedbackModel } from 'features/feedback';
import { model as userModel } from 'features/user';

export const rootModel = {
  feedback: feedbackModel,
  intl: intlModel,
  user: userModel,
};

export type RootModel = typeof rootModel;

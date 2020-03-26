import { connect } from 'react-redux';
import Snackbar from 'features/common/components/Snackbar';
import { FeedbackVariant } from 'features/feedback/constances';
import { RootState } from 'app/store';
import { ReducerDispatch } from '../../model';

const { SNACKBAR } = FeedbackVariant;

const mapState = (state: RootState) => {
  return {
    open: state.feedback.getIn([SNACKBAR, 'visible']),
    message: state.feedback.getIn([SNACKBAR, 'content']),
    variant: state.feedback.getIn([SNACKBAR, 'variant']),
  };
};

const mapDispatch = (dispatch: ReducerDispatch) => ({
  onClose: () => dispatch.feedback.closeSnackbar(),
});
// @ts-ignore
export default connect(mapState, mapDispatch)(Snackbar);

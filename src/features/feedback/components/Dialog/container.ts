import { connect } from 'react-redux';
import Dialog from 'features/common/components/Dialog';
import { RootState } from 'app/store';
import { FeedbackVariant } from 'features/feedback/constances';
import { ReducerDispatch, AffectsDispatch } from '../../model';

const { DIALOG } = FeedbackVariant;
// todo
const mapState = (state: RootState) => {
  return {
    visible: state.feedback.getIn([DIALOG, 'visible']),
    onOk: state.feedback.getIn([DIALOG, 'onOk']),
    okText: state.feedback.getIn([DIALOG, 'okText']),
    cancelText: state.feedback.getIn([DIALOG, 'cancelText']),
    title: state.feedback.getIn([DIALOG, 'title']),
    children: state.feedback.getIn([DIALOG, 'content']),
    footer: state.feedback.getIn([DIALOG, 'footer']),
    footerable: state.feedback.getIn([DIALOG, 'footerable']),
    noWrapper: state.feedback.getIn([DIALOG, 'noWrapper']),
  };
};

const mapDispatch = (dispatch: ReducerDispatch & AffectsDispatch) => ({
  onClose: () => dispatch.feedback.closeDialog(),
  onOk: () => dispatch.feedback.handleDialogOk(),
});
// todo
// @ts-ignore
export default connect(mapState, mapDispatch)(Dialog);

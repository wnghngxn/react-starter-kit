import { connect } from 'react-redux';
import Confirm from 'features/common/components/Confirm';
import { Dispatch } from 'react';
import { FeedbackVariant } from 'features/feedback/constances';
import { RootState } from 'app/store';
import { ReducerDispatch, AffectsDispatch } from '../../model';

const { CONFIRM } = FeedbackVariant;

const mapState = (state: RootState) => {
  return {
    visible: state.feedback.getIn([CONFIRM, 'visible']),
    onOk: state.feedback.getIn([CONFIRM, 'onOk']),
    okText: state.feedback.getIn([CONFIRM, 'okText']),
    cancelText: state.feedback.getIn([CONFIRM, 'okText']),
    children: state.feedback.getIn([CONFIRM, 'content']),
  };
};

const mapDispatch = (dispatch: ReducerDispatch & AffectsDispatch) => ({
  onClose: () => dispatch.feedback.closeConfirm(),
  onOk: () => dispatch.feedback.handleConfirmOk(),
});
// @ts-ignore
export default connect(mapState, mapDispatch as Dispatch)(Confirm);

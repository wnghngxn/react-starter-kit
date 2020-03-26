import { combineEpics } from 'redux-observable';
import coreEpic from 'features/common/model/epics';

const rootEpic = combineEpics(coreEpic);

export default rootEpic;

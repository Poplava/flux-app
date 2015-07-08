import AppDispatcher from '../../dispatcher/AppDispatcher';
import TalksConstants from './TalkConstants';

export default {
    create(text) {
        AppDispatcher.dispatch({
            actionType: TalksConstants.TALK_CREATE,
            text: text
        });
    }
};
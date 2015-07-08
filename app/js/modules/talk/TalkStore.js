import AppDispatcher from '../../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import TalkConstants from './TalkConstants';
import assign from 'object-assign';

var _talks = [],
    store;

const CHANGE_EVENT = 'change';

class TalkStore extends EventEmitter {
    list() {
        return _talks;
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

store = new TalkStore();

AppDispatcher.register(function(action) {
    var text;

    switch (action.actionType) {
        case TalkConstants.TALK_CREATE:
            text = action.text.trim();

            if (text !== '') {
                create(text);
                store.emitChange();
            }

            break;
    }
});

function generateId() {
    return (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
}

function create(text) {
    let talk = {
        id: generateId(),
        text: text
    };

    _talks.push(talk);

    return talk;
}

export default store;

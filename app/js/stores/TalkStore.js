import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import TalkConstants from '../constants/TalkConstants';
import assign from 'object-assign';
import _ from 'underscore';

var talks = [];

function create(text) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
        talk = {
            id: id,
            text: text
        };

    talks.push(talk);

    return talk;
}

function update(id, updates) {
    var talk = find(id);

    if (talk) {
        assign(talk, updates);
    }

    return talk;
}

function find(id) {
    return _.find(talks, (talk) => {
        return talk.id === id;
    });
}

function destroy(id) {
    var talk = find(id),
        index = talks.indexOf(talk);

    if (index >= 0) {
        talks.splice(index, 1);
    }

    return talk;
}

create('foo');
create('bar');

class TalkStore extends EventEmitter {
    getAll() {
        return talks;
    }

    emitChange() {
        this.emit(TalkConstants.CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(TalkConstants.CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(TalkConstants.CHANGE_EVENT, callback);
    }
}

var store = new TalkStore();

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

export default store;

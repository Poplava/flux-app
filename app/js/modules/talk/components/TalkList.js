import React from 'react';
import _ from 'underscore';

import TalkStore from '../TalkStore';

import TalkListItem from './TalkListItem';

export default React.createClass({
    componentDidMount() {
        TalkStore.addChangeListener(this._onChange);
    },

    _onChange() {
        this.setState(getTalkState());
    },

    getInitialState() {
        return getTalkState();
    },

    render() {
        let talks = this.state.talks,
            components;

        components = _.map(talks, function(talk) {
            return <TalkListItem key={talk.id} talk={talk} />;
        }, this);

        return (
            <div>
                <div>total: {this.state.talks.length}</div>
                <div>{components}</div>
            </div>
        );
    }
});

function getTalkState() {
    return {
        talks: TalkStore.list()
    };
}

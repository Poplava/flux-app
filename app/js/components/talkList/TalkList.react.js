import React from 'react';

import TalkListItem from '../talkListItem/TalkListItem.react';

import './talkList.less';

module.exports = React.createClass({
    propTypes: {
        talks: React.PropTypes.array.isRequired
    },

    getDefaultProps() {
        return {
            talks: []
        };
    },

    render() {
        let talks = this.props.talks,
            talksComponents = [];

        talksComponents = talks.map(function(talk, index) {
            return <TalkListItem key={index} talk={talk} />;
        });

        return(
            <div className="c-talk-list-item">
                {talksComponents}
            </div>
        );
    }
});
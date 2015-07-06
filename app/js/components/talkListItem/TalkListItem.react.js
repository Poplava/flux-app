import React from 'react';

import './talkListItem.less';

module.exports = React.createClass({
    propTypes: {
        talk: React.PropTypes.object.isRequired
    },

    getDefaultProps() {
        return {
            talk: {}
        };
    },

    render() {
        let talk = this.props.talk;

        return(
            <div className="c-talk-list-item">
                {talk.id}: {talk.text}
            </div>
        );
    }
});
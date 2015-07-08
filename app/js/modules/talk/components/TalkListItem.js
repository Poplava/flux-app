import React from 'react';
import { PropTypes } from 'react';

export default React.createClass({
    propTypes: {
        talk: PropTypes.object.isRequired
    },

    render() {
        let talk = this.props.talk;

        return (
            <div><strong>{talk.id}</strong>: {talk.text}</div>
        );
    }
});
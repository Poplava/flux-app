import React from 'react';

import TalkActions from '../TalkActions';
import TalkStore from '../TalkStore';

export default React.createClass({
    getInitialState() {
        return {
            value: ''
        };
    },

    componentDidMount() {
        TalkStore.addChangeListener(function() {
            console.log('changed', TalkStore.list());
        });
    },

    handleChange(event) {
        this.setState({
            value: event.target.value
        });
    },

    handleClick() {
        let text = this.state.value;

        this.setState({
            value: ''
        });

        TalkActions.create(text);
    },

    render() {
        return(
            <div>
                <div className="form-group">
                    <input type="text" className="form-control" ref="textInput" onChange={this.handleChange} value={this.state.value} />
                </div>
                <button className="btn btn-default" onClick={this.handleClick}>Submit</button>
            </div>
        );
    }
});
import React from 'react';

import Header from '../header/Header.react';
import TalkList from '../talkList/TalkList.react';

import TalkStore from '../../stores/TalkStore';

module.exports = React.createClass({
    render() {
        return(
            <div className="c-app">
                <Header />
                <section className="container">
                    I'm on the main section.
                    <TalkList talks={this.state.talks}/>
                </section>
            </div>
        );
    },

    getInitialState() {
        return {
            talks: TalkStore.getAll()
        };
    }
});

import React from 'react';

import '../styles/header.less';

import Header from './Header';
import TalkList from '../modules/talk/components/TalkList';
import TalkTextInput from '../modules/talk/components/TalkTextInput';

export default React.createClass({
    render() {
        return(
            <div className="c-app">
                <Header />
                <section className="container">
                    I'm on the main section.
                    <TalkList />
                    <TalkTextInput />
                </section>
            </div>
        );
    }
});

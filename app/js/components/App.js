import React from 'react';

import '../styles/header.less';

import Header from './Header';
import TalkTextInput from '../modules/talk/components/TalkTextInput';

export default React.createClass({
    render() {
        return(
            <div className="c-app">
                <Header />
                <section className="container">
                    I'm on the main section.
                    <TalkTextInput />
                </section>
            </div>
        );
    }
});

import React from 'react';
import Header from '../header/Header.react';
import TalkListItem from '../talkListItem/TalkListItem.react'

import './app.less';

module.exports = () => {
    return(
        <div className="c-app">
            <Header />
            <section className="container">
                I'm on the main section.
                <TalkListItem />
            </section>
        </div>
    );
};

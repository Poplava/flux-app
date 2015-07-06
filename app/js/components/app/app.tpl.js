import React from 'react';
import Header from '../header/Header.react'

module.exports = () => {
    return(
        <div className="app-root">
            <Header />
            <section className="main">
                I'm on the main section.
            </section>
        </div>
    );
};

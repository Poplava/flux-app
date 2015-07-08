import React from 'react';

import '../styles/header.less';

export default React.createClass({
    render() {
        return(
            <header className="c-header">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="logo">
                                The<strong>insane</strong>talks
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
});

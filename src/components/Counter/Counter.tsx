import React, { Component } from 'react';

export default class Counter extends Component {

    state = {
        count: 1337
    }

    getCount() {
        return this.state.count;
    }

    render() {
        return (
            <React.Fragment>
                <h1>{this.getCount()}</h1>
                <h2>test</h2>
            </React.Fragment>
        );
    }

}

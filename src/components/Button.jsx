import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { updateMessage } from '../actions';

const data = {
    lines: [{
        "message": ["test message"],
        "createdAt": 1492914485365,
        "lineId": "7b4e9a50-27cc-11e7-8c1f-83e05e77fe24",
        "copies": 0,
        "views": 4,
        "categories": ["cheesy", "stupid"]
    }, {
        "message": ["another test message", "with two parts"],
        "createdAt": 1492914485365,
        "lineId": "7b4e9a50-27cc-11e7-8c1f-22e05e77fe24",
        "copies": 2,
        "views": 44,
        "categories": ["pickup"]
    }]
};

const filterLines = (categories) => {
    const cats = categories.map(c => c.id);

    return data.lines
        .filter((line) => {
            return _.intersection(line.categories, cats).length > 0;
        })
}

const fetchLine = (categories) => {
    const filteredLines = filterLines(categories)
    const randomLine = filteredLines[Math.floor(Math.random()*filteredLines.length)];
    const msg = randomLine ? randomLine.message : 'Sorry no message available';
    return msg;
}

const Button = ({ dispatch, categories }) => {
    return <button onClick={() => {dispatch(updateMessage(fetchLine(categories)))}}>Click Me</button>;
}

export default connect()(Button);
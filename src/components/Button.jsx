import React from 'react';
import _ from 'lodash';

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
    return data.lines
        .filter((line) => {
            return _.intersection(line.categories, categories).length > 0;
        })
}

const fetchLine = (storeFn, categories) => {
    const filteredLines = filterLines(categories)
    const msg = filteredLines[Math.floor(Math.random()*filteredLines.length)].message;
    storeFn(msg, 'message'); 
}

export default ({updateStore, categories}) => {
    return <button onClick={() => {fetchLine(updateStore, categories)}}>Click Me</button>;
}
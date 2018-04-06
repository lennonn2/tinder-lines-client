import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { updateMessage } from '../actions';
import data from '../mockData';

const filterLines = (categories) => {
    const cats = categories
        .filter(c => c.checked)
        .map(c => c.id);

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

// const mapDispatchToProps = () => {
//     return {
//         updateMessage: updateMessage
//     }
// }

const Button = ({ updateMessage, categories }) => {
    return <button onClick={updateMessage}>Click Me</button>;
}

export default connect(null, {updateMessage})(Button);
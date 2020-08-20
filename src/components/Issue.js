import React from 'react';
import PropTypes from 'prop-types';

export default class Issue extends React.Component {
    static propTypes = {
        myProps: PropTypes.bool,
    };

    /**
     * Public Method
     *
     * @public
     *
     * @returns {Boolean} return a Boolean Value
     */
    somePublicMethod = () => {
        // doSomething

        return this.props.myProps;
    }

    render() {
        return 'Open console, see warnings';
    }
}

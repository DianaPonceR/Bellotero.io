import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/components/configurator/configurator-item-title.scss";

const ConfiguratorItemTitle = ({ text1, text2 }) => {
    return (
        <>
            <div className="item-title">
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
        </>
    );
};

ConfiguratorItemTitle.propTypes = {
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired
}

ConfiguratorItemTitle.defaultProps = {
    text1: '',
    text2: ''
}

export default ConfiguratorItemTitle;
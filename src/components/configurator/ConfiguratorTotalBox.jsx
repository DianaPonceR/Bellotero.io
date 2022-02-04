import React from 'react';
import PropTypes from 'prop-types';
import "@styles/components/configurator/configurator-total-box.scss";

const ConfiguratorTotalBox = ({ value }) => {
    return (
        <>
            <div className="total-box">
                <div className="total">
                    <div className="coin-total-amount">$</div>
                    <div className="total-amount">{ value }</div>
                </div>
                <div className="text-total-amount">
                    Estimated cost food savings
                </div>
            </div>
        </>
    );
};

ConfiguratorTotalBox.propTypes = {
    value: PropTypes.number.isRequired
}

ConfiguratorTotalBox.defaultProps = {
    value: 0
}

export default ConfiguratorTotalBox;
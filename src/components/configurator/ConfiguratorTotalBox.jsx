import React from 'react';
import PropTypes from 'prop-types';
import "../../styles/components/configurator/configurator-total-box.scss";

const ConfiguratorTotalBox = ({ idTotalBox, description, valueIngredientInput, costFoodSavings }) => {

    return (
        <>
            <div className="total-box">
                <div className="total">
                    <div className="coin-total-amount">$</div>
                    {
                        idTotalBox === 'estimated_cost_food_savings'
                        ? <div className="total-amount">{ costFoodSavings }</div>
                        : <div className="total-amount">{ valueIngredientInput }</div>
                    }

                </div>
                <div className="text-total-amount">
                    {description}
                </div>
            </div>
        </>
    );
};

ConfiguratorTotalBox.propTypes = {
    valueIngredientInput: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired
}

ConfiguratorTotalBox.defaultProps = {
    valueIngredientInput: 0,
    description: ''
}

export default ConfiguratorTotalBox;
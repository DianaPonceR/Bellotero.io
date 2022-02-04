import React, {useState} from 'react';
import PropTypes from "prop-types";
import "../../styles/components/configurator/configurator-input-monthly.scss";
import {useDispatch} from "react-redux";
import { ingredientAction} from "../../actions/calculator";
import ConfiguratorTotalBox from "./ConfiguratorTotalBox";

const ConfiguratorInputMonthly = ({ ingredientInputValue, fulltimeInputValue }) => {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState(ingredientInputValue)

    const handleChange = (event) => {
        const {value, max} = event.target;

        if(Number(value) > Number(max)) {
            return
        }

        if(String(value).includes('.')) {
            const [, decimals] = String(value).split('.')
            if (decimals.length > 3) {
                return
            }
            setInputValue(value)
        } else {
            setInputValue(value)
        }

        dispatch(ingredientAction(value, fulltimeInputValue))
    }

    const handleFocus = (event) => event.target.select()

    return (
        <>
            <div className="input-monthly-wrapper">
                <div className="input-monthly-content">
                    <input
                        type="number"
                        className="input-monthly"
                        onChange={handleChange}
                        value={ingredientInputValue}
                        onFocus={handleFocus}
                        min="0"
                        max="100" />
                    <span className="coin">$</span>
                </div>
            </div>
        </>
    );
};

ConfiguratorInputMonthly.propTypes = {
    ingredientInputValue: PropTypes.number.isRequired
}

ConfiguratorTotalBox.defaultProps = {
    ingredientInputValue: 0
}

export default ConfiguratorInputMonthly;
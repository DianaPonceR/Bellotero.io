import React from 'react';
import "../../styles/components/configurator/configurator-input-range.scss";
import PropTypes from "prop-types";
import ConfiguratorTotalBox from "./ConfiguratorTotalBox";
import ConfiguratorInputMonthly from "./ConfiguratorInputMonthly";
import {useDispatch} from "react-redux";
import {fulltimeAction, ingredientAction} from "../../actions/calculator";

const ConfiguratorInputRange = ({ idRange, inputValue, min, max }) => {

    const dispatch = useDispatch()

    const handleChange = (event) => {
        const {value} = event.target

        switch (idRange) {
            case 'ingredient_range':
                dispatch(ingredientAction(value))
                break
            case 'fulltime_range':
                dispatch(fulltimeAction(value))
                break
            default:
                return
        }


    }

    return (
        <>
            <div className="input-range-wrapper">
                <input
                    type="range"
                    className="custom-range"
                    min={min}
                    max={max}
                    step="1"
                    value={inputValue}
                    onChange={handleChange}
                />
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


export default ConfiguratorInputRange;
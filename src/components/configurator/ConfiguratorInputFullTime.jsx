import React, {useState} from 'react';
import PropTypes from "prop-types";
import "../../styles/components/configurator/configurator-input-full-time.scss"
import ConfiguratorTotalBox from "./ConfiguratorTotalBox";
import {useDispatch} from "react-redux";
import {fulltimeAction} from "../../actions/calculator";

const ConfiguratorInputFullTime = ({ value }) => {

    const dispatch = useDispatch()

    const value_entero = Math.floor(value)

    const handleChange = (event) => {
        const fulltimeInputChange = event.target.value;
        const max = event.target.max;

        if(Number(fulltimeInputChange) > Number(max)) {
            return
        }

        dispatch(fulltimeAction(fulltimeInputChange))
    }

    const handleFocus = (event) => event.target.select()

    return (
        <>
            <div className="input-fulltime-wrapper">
                <input
                    type="number"
                    className="input-full-time"
                    value={value_entero}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    min="0"
                    max="23.78"
                />
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

export default ConfiguratorInputFullTime;
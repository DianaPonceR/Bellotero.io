import React, {useState} from 'react';
import PropTypes from "prop-types";
import "../../styles/components/configurator/configurator-input-full-time.scss"
import ConfiguratorTotalBox from "./ConfiguratorTotalBox";
import {useDispatch} from "react-redux";
import {fulltimeAction} from "../../actions/calculator";

const ConfiguratorInputFullTime = ({ ingredientInputValue, fulltimeInputValue }) => {

    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState(fulltimeInputValue)

    const handleChange = (event) => {
        const fulltimeInputChange = event.target.value;
        const max = event.target.max;

        if(Number(fulltimeInputChange) > Number(max)) {
            return
        }

        setInputValue(fulltimeInputChange)

        dispatch(fulltimeAction(ingredientInputValue, fulltimeInputChange))
    }

    const handleFocus = (event) => event.target.select()

    return (
        <>
            <div className="input-fulltime-wrapper">
                <input
                    type="number"
                    className="input-full-time"
                    value={fulltimeInputValue}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    min="0"
                    max="10"
                />
            </div>
        </>
    );
};

ConfiguratorTotalBox.propTypes = {
    fulltimeInputValue: PropTypes.number.isRequired
}

ConfiguratorTotalBox.defaultProps = {
    fulltimeInputValue: 0
}

export default ConfiguratorInputFullTime;
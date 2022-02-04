import React from 'react';
import "@styles/components/configurator/configurator-input-range.scss";

const ConfiguratorInputRange = () => {
    return (
        <>
            <div className="input-range-wrapper">
                <input type="range" className="custom-range" min="0" max="100" step="1" />
            </div>
        </>
    );
};

export default ConfiguratorInputRange;
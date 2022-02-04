import React from 'react';
import "src/styles//components/configurator/configurator-text.scss";

const ConfiguratorText = ({ description }) => {
    return (
        <>
            <p className="config-text">
                {description}
            </p>
        </>
    );
};

export default ConfiguratorText;
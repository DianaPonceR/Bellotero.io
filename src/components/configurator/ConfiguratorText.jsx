import React from 'react';
import "../../styles/components/configurator/configurator-text.scss";

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
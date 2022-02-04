import React from 'react';
import "src/styles//components/configurator/configurator-title.scss";

const ConfiguratorTitle = ({ title }) => {

    const title_transformed = () => {
        const title_splited = title.split(' ')

        return {
            title1: (title_splited.slice(0, 3)).join(' '),
            title2: (title_splited.slice(3,4))[0]
        }
    }

    const {title1, title2} = title_transformed()

    return (
        <>
            <h1 className="main-title"><span className="span-title">{title1}</span></h1>
            <h1 className="main-title"><span className="span-title">{title2}</span></h1>
        </>
    );
};

export default ConfiguratorTitle;
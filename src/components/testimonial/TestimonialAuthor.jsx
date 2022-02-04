import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "src/styles//components/testimonial/testimonial-author.scss";
import ConfiguratorItemTitle from "../configurator/ConfiguratorItemTitle";

const TestimonialAuthor = ({name, position, comment}) => {
    console.log('TestimonialAuthor')
    console.log(`name: ${name}`)
    console.log(`position: ${position}`)
    console.log(`comment: ${comment}`)

    return (
        <>
            <div className="testimonial-author">
                <div className="author-name">
                    <p>{name}</p>
                </div>
                <div className="author-position">
                    <p>{position}</p>
                </div>
            </div>
        </>
    );
};

export default TestimonialAuthor;
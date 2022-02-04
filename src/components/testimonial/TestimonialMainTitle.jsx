import React from 'react';
import PropTypes from 'prop-types';

import "src/styles//components/testimonial/testimonial-main-title.scss";

const TestimonialMainTitle = ({ title }) => {
    return (
        <>
            <div className="testimonial-main-title">
                <h1>{ title }</h1>
            </div>
        </>
    );
};

TestimonialMainTitle.propTypes = {
    title: PropTypes.string.isRequired
}

TestimonialMainTitle.defaultProps = {
    title: ''
}

export default TestimonialMainTitle;
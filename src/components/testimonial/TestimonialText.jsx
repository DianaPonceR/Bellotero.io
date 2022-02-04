import React from 'react';

import "src/styles//components/testimonial/testimonial-text.scss";

const TestimonialText = ({comment}) => {
    return (
        <>
            <div className="testimonial-text">
                <p>
                    {comment}
                </p>
            </div>
        </>
    );
};

export default TestimonialText;
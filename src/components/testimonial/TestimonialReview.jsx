import React from 'react';
import "@styles/components/testimonial/testimonial-review.scss";

const TestimonialReview = ({name, position, comment, isActive}) => {
    return (
        <>
            <div className={isActive ? 'testimonial-author active' : 'testimonial-author'}>
                <div className="author-name">
                    <p>{name}</p>
                </div>
                <div className="author-position">
                    <p>{position}</p>
                </div>
            </div>
            <div className={isActive ? 'testimonial-text active' : 'testimonial-text'}>
                <p>{comment}</p>
            </div>
        </>
    );
};

export default TestimonialReview;
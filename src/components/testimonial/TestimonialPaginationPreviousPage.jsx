import React from 'react';

import "../../styles/components/testimonial/testimonial-pagination-previous-page.scss";

const TestimonialPaginationPreviousPage = ({ onPreviousClick }) => {
    return (
        <>
            <div className="arrow previous-page" onClick={ onPreviousClick }>
                <div className="arrow-container">
                    <div className="dash"></div>
                    <div className="arrow-up-previous"></div>
                    <div className="arrow-down-previous"></div>
                </div>
            </div>
        </>
    );
};

export default TestimonialPaginationPreviousPage;
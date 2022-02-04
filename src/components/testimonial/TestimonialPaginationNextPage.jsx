import React from 'react';

import "../../styles/components/testimonial/testimonial-pagination-next-page.scss";

const TestimonialPaginationNextPage = ({ onNextClick }) => {
    return (
        <>
            <div className="arrow next-page" onClick={ onNextClick }>
                <div className="arrow-container">
                    <div className="dash"></div>
                    <div className="arrow-up-next"></div>
                    <div className="arrow-down-next"></div>
                </div>
            </div>
        </>
    );
};

export default TestimonialPaginationNextPage;
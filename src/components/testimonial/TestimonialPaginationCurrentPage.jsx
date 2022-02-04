import React from 'react';

import "../../styles/components/testimonial/testimonial-pagination-current-page.scss";

const TestimonialPaginationCurrentPage = ({ current, total }) => {

    return (
        <>
            <div className="current-page">
                <p>{current + 1}/{total}</p>
            </div>
        </>
    );
};

export default TestimonialPaginationCurrentPage;
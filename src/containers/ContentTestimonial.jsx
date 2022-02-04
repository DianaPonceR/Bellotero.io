import React, { useEffect, useState } from 'react';
import "src/styles//layout/content-testimonial.scss";

import TestimonialMainTitle from "../components/testimonial/TestimonialMainTitle";
import TestimonialPaginationCurrentPage from "../components/testimonial/TestimonialPaginationCurrentPage";
import TestimonialPaginationPreviousPage from "../components/testimonial/TestimonialPaginationPreviousPage";
import TestimonialPaginationNextPage from "../components/testimonial/TestimonialPaginationNextPage";
import {getTestimonials} from "../helpers/getTestimonials";
import TestimonialReview from "../components/testimonial/TestimonialReview";

const ContentTestimonial = () => {

    const [testimonials, setTestimonials] = useState(
        {
            title: '',
            reviews: []
        }
    )

    const [current, setCurrent] = useState(0)

    useEffect(() => {
        getTestimonials()
            .then(setTestimonials)
    }, [])

    const {reviews} = testimonials
    const total = reviews.length

    const handleNext = () => {
        setCurrent(current === total - 1 ? 0 : current + 1)
    }

    const handlePrevious = () => {
        setCurrent(current === 0 ? total - 1 : current - 1)
    }

    return (
        <>
            <div className="content">

                <TestimonialMainTitle
                    title={testimonials.title}
                />

                <section className="testimonial-wrapper">
                    <div className="testimonial-container">

                        {
                            reviews.map((review, idx) => (

                                <TestimonialReview
                                    key={review.name}
                                    {...review}
                                    isActive={idx === current}
                                />

                            ))
                        }

                    </div>

                    <div className="pagination">
                        <div className="item">
                            <TestimonialPaginationCurrentPage
                                current={current}
                                total={total}
                            />
                        </div>
                        <div className="item">
                            <TestimonialPaginationPreviousPage
                                onPreviousClick={handlePrevious}
                            />
                            <TestimonialPaginationNextPage
                                onNextClick={handleNext}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ContentTestimonial;
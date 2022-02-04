import "../../styles/components/testimonial/testimonial-author.scss";

const TestimonialAuthor = ({name, position, comment}) => {

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
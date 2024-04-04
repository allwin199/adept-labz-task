import "./testimonials.css";
import "../../assets/css/common.css";
import Star from "./star";

const Testimonials = () => {
    const testimonailsCount = [0, 1, 2];
    return (
        <div className="testimonails-wrapper">
            <div className="testimonials-title">TESTIMONIALS</div>

            <div className="testimonial-subWrapper">
                {testimonailsCount.map((testimonail, index) => (
                    <div
                        className="testimonial-section"
                        key={"testimonial" + index}
                    >
                        <div className="testimonial-image">
                            <img
                                src="../../src/assets/images/testimonial-user.svg"
                                alt="testimonial-image"
                                className="testimonial-image-size"
                            />
                        </div>
                        <div className="name-wrapper">
                            <p className="user-name">Vikas</p>
                            <Star />
                        </div>

                        <div className="testimonial-content">
                            Love the cloth material! So breezy and comfortable.
                            Really durable as well. I must say the jeans I
                            bought was worth the price.
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;

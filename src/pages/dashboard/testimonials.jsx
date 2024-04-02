import "./testimonials.css";
import "../../assets/css/common.css";
import RatingImg from "../../assets/images/star.svg";

const Testimonials = () => {
    return (
        <div className="testimonails-wrapper">
            <div className="testimonials-title">TESTIMONIALS</div>
            <div className="testimonial-subWrapper">
                <div className="testimonial-section">
                    <div className="testimonial-image">
                        <img
                            src="../../src/assets/images/testimonial-user.svg"
                            alt="testimonial-image"
                            className="testimonial-image-size"
                        />
                    </div>
                    <div className="name-wrapper">
                        <p className="user-name">Vikas</p>
                        <div className="star-images">
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                        </div>
                    </div>

                    <div className="testimonial-content">
                        Love the cloth material! So breezy and comfortable.
                        Really durable as well. I must say the jeans I bought
                        was worth the price.
                    </div>
                </div>
                <div className="testimonial-section">
                    <div className="name-wrapper">
                        <p className="user-name">Vikas</p>
                        <div className="star-images">
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                        </div>
                    </div>

                    <div className="testimonial-content">
                        Love the cloth material! So breezy and comfortable.
                        Really durable as well. I must say the jeans I bought
                        was worth the price.
                    </div>
                    <div className="testimonial-image">
                        <img
                            src="../../src/assets/images/testimonial-user.svg"
                            alt="testimonial-image"
                            className="testimonial-image-size"
                        />
                    </div>
                </div>
                <div className="testimonial-section">
                    <div className="name-wrapper">
                        <p className="user-name">Vikas</p>
                        <div className="star-images">
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                            <img src={RatingImg} />
                        </div>
                    </div>

                    <div className="testimonial-content">
                        Love the cloth material! So breezy and comfortable.
                        Really durable as well. I must say the jeans I bought
                        was worth the price.
                    </div>
                    <div className="testimonial-image">
                        <img
                            src="../../src/assets/images/testimonial-user.svg"
                            alt="testimonial-image"
                            className="testimonial-image-size"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

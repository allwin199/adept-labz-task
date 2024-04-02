import "./footer.css";
import "../assets/css/common.css";

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-content d-flex">
                <div className="left-section d-flex align-center flex-column">
                    <div>
                        <p>About Us</p>
                        <p>Delivery Information</p>
                        <p>Returns & Exchange</p>
                        <p>Technical & Privacy</p>
                        <p>Order Status</p>
                    </div>
                </div>
                <div className="middle-section d-flex align-center flex-column">
                    <div className="footer-logo d-flex justify-center">
                        <p className="made-up">MADE UP</p>
                    </div>
                    <p className="stay-in-touch">Stay in touch with us</p>
                    <div className="social-icons d-flex">
                        <img src="./src/assets/images/facebook.svg" />

                        <img src="./src/assets/images/instagram.svg" />

                        <img src="./src/assets/images/youtube.svg" />
                    </div>
                </div>
                <div className="right-section d-flex align-center flex-column">
                    <div>
                        <p className="corporate-office">Our Corporate Office</p>
                        <p className="office-address">
                            No: 7,A2B road, Adayar Rajpuram,
                        </p>
                        <p className="office-address">
                            T-Nagar, Chennai - 642002.
                        </p>
                        <div className="office-contact">
                            <p>
                                <span className="email-image">
                                    <img src="./src/assets/images/email.svg" />
                                </span>
                                sales@madeup.com
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="email-image">
                                    <img src="./src/assets/images/phone.svg" />
                                </span>
                                044 9999 9999
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

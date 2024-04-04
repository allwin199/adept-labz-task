import "./footer.css";
import "../assets/css/common.css";
import FacebookImg from "../assets/images/facebook.svg";
import InstagramImg from "../assets/images/instagram.svg";
import YoutubeImg from "../assets/images/youtube.svg";
import EmailImg from "../assets/images/email.svg";
import PhoneImg from "../assets/images/phone.svg";

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
                        <img src={FacebookImg} />

                        <img src={InstagramImg} />

                        <img src={YoutubeImg} />
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
                                    <img src={EmailImg} />
                                </span>
                                sales@madeup.com
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className="email-image">
                                    <img src={PhoneImg} />
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

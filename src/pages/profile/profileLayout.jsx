import { Link, Outlet, useMatch } from "react-router-dom";
import "../../assets/css/common.css";
import "./profileLayout.css";
import SideArrow from "../../assets/images/side-arrow.svg";
import ProfileImage from "../../assets/images/profile-image.svg";

const Profilelayout = () => {
    const profileMatch = useMatch("/profile");
    const ordersMatch = useMatch("/profile/myorders");

    return (
        <div className="profile-wrapper">
            <p className="profile-text">Home / My Profile</p>
            <div className="profile-content">
                <div className="d-flex">
                    <div className="d-flex flex-column nav-box">
                        <div className="d-flex align-center profile-section">
                            <div className="">
                                <img src={ProfileImage} alt="profile-img" />
                            </div>
                            <div>
                                <p className="profile-name">Grishk</p>
                                <p className="profile-email">
                                    griiskaim@gmail.com
                                </p>
                            </div>
                        </div>
                        <Link
                            className={`custom-link ${
                                profileMatch ? "active-link" : ""
                            }`}
                            to="/profile"
                        >
                            <div className="d-flex link-wrapper">
                                <div>
                                    <p className="nav-text">My Profile</p>
                                    <p className="nav-subtext">
                                        Notifications, password
                                    </p>
                                </div>
                                <div className="nav-arrow">
                                    <img src={SideArrow} alt="side arrow" />
                                </div>
                            </div>
                        </Link>
                        <Link
                            className={`custom-link ${
                                ordersMatch ? "active-link" : ""
                            }`}
                            to="/profile/myorders"
                        >
                            <div className="d-flex link-wrapper">
                                <div>
                                    <p className="nav-text">My orders</p>
                                    <p className="nav-subtext">
                                        Already have 12 orders
                                    </p>
                                </div>
                                <div className="nav-arrow">
                                    <img src={SideArrow} alt="side arrow" />
                                </div>
                            </div>
                        </Link>
                        <Link className="custom-link">
                            <div className="d-flex link-wrapper">
                                <div>
                                    <p className="nav-text">
                                        Shipping addresses
                                    </p>
                                    <p className="nav-subtext">3 ddresses</p>
                                </div>
                                <div className="nav-arrow nav-arrow-shipping">
                                    <img src={SideArrow} alt="side arrow" />
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="profile-content-box">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profilelayout;

import "./header.css";
import "../assets/css/common.css";
import { Link, useMatch } from "react-router-dom";

const Header = () => {
    const dashboard = useMatch("/");

    const links = [
        {
            title: "For Me",
            href: "/",
        },
        {
            title: "Jeans",
            href: "/jeans",
        },
        {
            title: "Shirts",
            href: "/shirts",
        },
        {
            title: "T-Shirts",
            href: "/t-shirts",
        },
        {
            title: "Trousers",
            href: "/trousers",
        },
        {
            title: "Joggers",
            href: "/joggers",
        },
        {
            title: "Shorts",
            href: "/shorts",
        },
    ];

    return (
        <div className="header-wrapper d-flex align-center">
            <div className="header-logo d-flex justify-center">
                <p className="logo-text">MADE UP</p>
            </div>
            <div className="header-links">
                <ul className="d-flex align-center">
                    {links.map((link) => (
                        <li key={link.title}>
                            <Link
                                to={link.href}
                                className={`${
                                    dashboard?.pathname === link.href
                                        ? "nav-active-link"
                                        : ""
                                }`}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="header-icons">
                <ul className="d-flex align-center justify-center">
                    <li>
                        <img
                            src="../src/assets/search.svg"
                            className="nav-icon"
                        />
                    </li>
                    <li>
                        <img
                            src="../src/assets/images/cart.svg"
                            className="nav-icon"
                        />
                    </li>
                    <li>
                        <Link to="/profile">
                            <img
                                src="../src/assets/images/person.svg"
                                className="nav-icon"
                            />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

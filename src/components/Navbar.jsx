import { useState, useRef } from "react";
import "./Navbar.css";
// import Search from "./Search";
// import Cart from "./Cart";
// import Person from "./Person";
// import Hamburger from "./Hamburger";
// import Close from "./Close";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const navRef = useRef();

    const showMobileNav = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const links = [
        {
            title: "For Me",
            href: "/",
        },
        {
            title: "Jeans",
            href: "/",
        },
        {
            title: "Shirts",
            href: "/",
        },
        {
            title: "T-Shirts",
            href: "/",
        },
        {
            title: "Trousers",
            href: "/",
        },
        {
            title: "Joggers",
            href: "/",
        },
        {
            title: "Shorts",
            href: "/",
        },
    ];

    return (
        <header className="header-style">
            <div>Logo</div>
            <div>
                <ul>
                    {links.map((link) => (
                        <li key={link.title}>{link.title}</li>
                    ))}
                </ul>
            </div>
            <div>Icons</div>
        </header>
    );
};

export default Navbar;

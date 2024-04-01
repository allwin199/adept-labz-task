import "./header.css";

const Header = () => {
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
        <div className="header-wrapper">
            <div className="header-logo">
                <div className="logo-text">MADE UP</div>
            </div>
            <div className="header-links">
                <ul>
                    {links.map((link) => (
                        <li key={link.title}>{link.title}</li>
                    ))}
                </ul>
            </div>
            <div className="header-icons">
                <ul>
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
                        <img
                            src="../src/assets/images/person.svg"
                            className="nav-icon"
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;

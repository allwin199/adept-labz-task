import "./profile.css";

const index = () => {
    const profileHandler = (e) => {
        e.preventDefault();
    };

    return (
        <div className="profile-section">
            <p className="profile-title">My Profile</p>
            <div className="profile-inputs">
                <form onSubmit={profileHandler}>
                    <div className="d-flex name-input">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                    </div>
                    <div className="d-flex">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="d-flex">
                        <input type="text" placeholder="Phone number" />
                    </div>
                    <div className="d-flex">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="d-flex">
                        <input type="password" placeholder="Confirm Password" />
                    </div>
                    <div className="d-flex profile-submit-wrapper">
                        <button className="profile-sumbit">
                            ADD NEW ADDRESS
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default index;

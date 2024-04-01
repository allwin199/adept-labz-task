import "./coupons.css";

const Coupons = () => {
    return (
        <div className="coupons-wrapper">
            <div className="coupon-overlay">
                <div className="coupon-content">
                    <div className="coupons-head">
                        GET COUPONS & STYLE GUIDES
                    </div>
                    <div>Subscribe to our Newsletter</div>
                    <div className="coupons-contact">
                        <input type="text" className="coupon-input" />
                        <button className="coupon-button">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coupons;
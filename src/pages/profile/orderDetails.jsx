const OrderDetails = () => {
    return (
        <div className="d-flex order-card">
            <div className="left-items d-flex">
                <div className="order-image-tile">
                    <img
                        src="../../src/assets/images/order-image.svg"
                        alt="order-image"
                        className="order-image"
                    />
                </div>
                <div className="d-flex flex-column order-details">
                    <p className="order-number">Order #12345678</p>
                    <p className="order-title">
                        Madeup White Cotton Blend
                        <br /> Checkered Slim Fit Shirt
                    </p>
                    <p className="order-delivery">
                        Express Delivery by Sat, Aug 30
                    </p>
                </div>
            </div>
            <div className="d-flex flex-column right-items">
                <div className="d-flex flex-column payment-details">
                    <p className="payment-mode">Credit Card Payment</p>
                    <p className="order-price">Rs 1,899</p>
                </div>
                <img src="../../src/assets/images/down-arrow.svg" />
                <div className="payment-status">
                    <p>Pending</p>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;

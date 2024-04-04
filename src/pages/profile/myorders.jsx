import "./myorder.css";
import "../../assets/css/common.css";
import OrderDetails from "./orderDetails";

const MyOrders = () => {
    return (
        <>
            <div className="my-orders">
                <p className="orders-heading">My Orders</p>
                <div className="orders-wrapper">
                    <OrderDetails />
                    <OrderDetails />
                    <OrderDetails />
                    <OrderDetails />
                </div>
            </div>
        </>
    );
};

export default MyOrders;

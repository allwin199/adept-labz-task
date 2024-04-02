import "./latestCollection.css";
import "../../assets/css/common.css";

const LatestCollections = () => {
    return (
        <div className="latest-collections-wrapper">
            <div className="latest-collection-header d-flex align-center justify-center">
                <div className="horizontal-line">
                    <hr className=""></hr>
                    <div className="overlap">
                        <p className="overlap-title">LATEST COLLECTIONS</p>
                    </div>
                </div>
            </div>
            <div className="collection-items d-flex align-center">
                <div className="collection-item">
                    <img
                        src="../../src/assets/images/05.svg"
                        alt="collection"
                    />
                    <div className="collection-item-details d-flex flex-column align-center">
                        <p className="collection-name">Printed Polo T-Shirt</p>
                        <p className="collection-price">₹1,499.00</p>
                    </div>
                </div>
                <div className="collection-item">
                    <img
                        src="../../src/assets/images/06.svg"
                        alt="collection"
                    />
                    <div className="collection-item-details d-flex flex-column align-center">
                        <p className="collection-name">Printed Polo T-Shirt</p>
                        <p className="collection-price">₹1,499.00</p>
                    </div>
                </div>
                <div className="collection-item">
                    <img
                        src="../../src/assets/images/05.svg"
                        alt="collection"
                    />
                    <div className="collection-item-details d-flex flex-column align-center">
                        <p className="collection-name">Printed Polo T-Shirt</p>
                        <p className="collection-price">₹1,499.00</p>
                    </div>
                </div>
                <div className="collection-item">
                    <img
                        src="../../src/assets/images/06.svg"
                        alt="collection"
                    />
                    <div className="collection-item-details d-flex flex-column align-center">
                        <p className="collection-name">Printed Polo T-Shirt</p>
                        <p className="collection-price">₹1,499.00</p>
                    </div>
                </div>
                <div className="collection-item">
                    <img
                        src="../../src/assets/images/05.svg"
                        alt="collection"
                    />
                    <div className="collection-item-details d-flex flex-column align-center">
                        <p className="collection-name">Printed Polo T-Shirt</p>
                        <p className="collection-price">₹1,499.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestCollections;

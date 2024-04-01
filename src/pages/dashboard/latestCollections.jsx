import "./latestCollection.css";

const LatestCollections = () => {
    return (
        <div className="latest-collections-wrapper">
            <div className="latest-collection-header">
                <div className="horizontal-line">
                    <hr className=""></hr>
                    <div className="overlap">
                        <p className="overlap-title">LATEST COLLECTIONS</p>
                    </div>
                </div>
            </div>
            <div className="collection-items">
                <div className="collection-item">
                    <img
                        src="../../src/assets/images/05.svg"
                        alt="collection"
                    />
                    <p>Printed Polo T-Shirt</p>
                    <p className="price">₹1,499.00</p>
                </div>
                <div className="collection-item">
                    <img
                        src="../../src/assets/images/06.svg"
                        alt="collection"
                    />
                    <p>Printed Polo T-Shirt</p>
                    <p className="price">₹1,499.00</p>
                </div>
                <div className="collection-item">
                    <img
                        src="../../src/assets/images/05.svg"
                        alt="collection"
                    />
                    <p>Printed Polo T-Shirt</p>
                    <p className="price">₹1,499.00</p>
                </div>
                <div className="collection-item">
                    <img
                        src="../../src/assets/images/06.svg"
                        alt="collection"
                    />
                    <p>Printed Polo T-Shirt</p>
                    <p className="price">₹1,499.00</p>
                </div>
                <div className="collection-item">
                    <img
                        src="../../src/assets/images/05.svg"
                        alt="collection"
                    />
                    <p>Printed Polo T-Shirt</p>
                    <p className="price">₹1,499.00</p>
                </div>
            </div>
        </div>
    );
};

export default LatestCollections;

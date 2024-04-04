import "./latestCollection.css";
import "../../assets/css/common.css";
import JeanImg from "../../assets/images/05.svg";
import PersonImg from "../../assets/images/06.svg";
import LatestCollectionItem from "./latestCollectionItem";

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
                <LatestCollectionItem
                    image={JeanImg}
                    name="Printed Polo T-Shirt"
                    price="1,499.00"
                />
                <LatestCollectionItem
                    image={PersonImg}
                    name="Printed Polo T-Shirt"
                    price="1,499.00"
                />
                <LatestCollectionItem
                    image={JeanImg}
                    name="Printed Polo T-Shirt"
                    price="1,499.00"
                />
                <LatestCollectionItem
                    image={PersonImg}
                    name="Printed Polo T-Shirt"
                    price="1,499.00"
                />
                <LatestCollectionItem
                    image={JeanImg}
                    name="Printed Polo T-Shirt"
                    price="1,499.00"
                />
            </div>
        </div>
    );
};

export default LatestCollections;

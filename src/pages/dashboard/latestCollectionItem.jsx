import PropTypes from "prop-types";

const LatestCollectionItem = ({ image, name, price }) => {
    return (
        <div className="collection-item">
            <img src={image} alt="collection" />
            <div className="collection-item-details d-flex flex-column align-center">
                <p className="collection-name">{name}</p>
                <p className="collection-price">₹{price}</p>
            </div>
        </div>
    );
};

LatestCollectionItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
};

export default LatestCollectionItem;

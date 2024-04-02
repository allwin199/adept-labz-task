import "./bannerContainer1.css";
import "../../assets/css/common.css";

const BannerContainer1 = () => {
    return (
        <div className="banner-container bg-size-cover bg-position-center bg-no-repeat h-100vh d-flex justify-center align-center">
            <div className="d-flex flex-column align-center">
                <p className="banner-element d-flex justify-center align-center element-1">
                    Clothes that&nbsp;<span className="text-red">respire</span>
                </p>
                <p className="banner-element d-flex justify-center align-center element-2">
                    for men who&nbsp;<span className="text-red">aspire</span>
                </p>
                <p className="browse-collections d-flex justify-center align-center">
                    Browse Collections
                </p>
            </div>
        </div>
    );
};

export default BannerContainer1;

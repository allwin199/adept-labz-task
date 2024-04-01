import "./bannerContainer2.css";
import "../../assets/css/common.css";

const BannerContainer2 = () => {
    return (
        <div className="banner2-container-wrapper h-100vh d-flex">
            <div className="left-element bg-size-cover bg-position-center bg-no-repeat d-flex justify-center align-center flex-column">
                <p className="banner-element element-1">
                    <span className="text-red">Summer</span>&nbsp; is here and
                </p>
                <p className="banner-element element-2">
                    so is our&nbsp;
                    <span className="text-red">collection</span>
                </p>
            </div>
            <div className="right-element d-flex flex-column">
                <div className="inner-element bg-size-cover bg-position-center bg-no-repeat justify-center align-center inner-element-1 d-flex flex-column">
                    <div className="banner-element">
                        <span className="text-red">Wrinkle</span>&nbsp; free
                        t-shirts
                    </div>
                </div>
                <div className="inner-element bg-size-cover bg-position-center bg-no-repeat justify-center align-center inner-element-2 d-flex">
                    <div className="d-flex justify-center align-center flex-column">
                        <div className="banner-element element-2">
                            <span className="text-red">Stain-free</span> denim
                            shirts
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerContainer2;

import BannerContainer1 from "./bannerContainer1";
import BannerContainer2 from "./bannerContainer2";
import LatestCollections from "./latestCollections";
import Testimonials from "./testimonials";
import Coupons from "./coupons";

const index = () => {
    return (
        <>
            <BannerContainer1 />
            <BannerContainer2 />
            <LatestCollections />
            <Testimonials />
            <Coupons />
        </>
    );
};

export default index;

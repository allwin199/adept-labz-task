import RatingImg from "../../assets/images/star.svg";

const Star = () => {
    return (
        <div className="star-images">
            <img src={RatingImg} />
            <img src={RatingImg} />
            <img src={RatingImg} />
            <img src={RatingImg} />
            <img src={RatingImg} />
        </div>
    );
};

export default Star;

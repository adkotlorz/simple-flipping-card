import React, {useState} from "react";

const Card = () => {
    const [flipped, setFliped] = useState(false);

    const handleFlip = () => {
        flipped ? setFliped(false) : setFliped(true);
    };

    const classVariant = flipped ? "flip-card flip-card--flipped" : "flip-card";

    return (
        <div className={classVariant} onClick={handleFlip}>
            <div className="flip-card__front">
                <div className=" ">
                    Front
                </div>
            </div>
            <div className="flip-card__back">
                <p className=" ">Back</p>
            </div>
        </div>
    );
};

export default Card;

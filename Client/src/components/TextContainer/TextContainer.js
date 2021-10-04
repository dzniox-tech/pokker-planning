import React, { useEffect, useState } from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";
import DisplayNos from "./displayNos";

const TextContainer = (props) => {
  const { allUserRatings } = props;
  const [average, setAverage] = useState(0);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  useEffect(() => {
    let sum = 0;
    if (allUserRatings.length > 0) {
      allUserRatings.forEach((rating) => {
        console.log("rating: ", rating);
        sum += rating.rating;
      });

      setAverage(sum / allUserRatings.length);
      setIsSubmitDisabled(false);
    }
  }, [allUserRatings]);

  return (
    <div className='textContainer'>
      <div>
        <DisplayNos
          socket={props.socket}
          isSubmitDisabled={isSubmitDisabled}
          setIsSubmitDisabled={(value) => setIsSubmitDisabled(value)}
        />
      </div>
      {allUserRatings.length > 0 ? (
        <div>
         
          <div className='activeContainer'>
            <h2>
              {allUserRatings.map((rating) => (

                <div key={rating.id} className='activeItem'>

                     <img alt='Online Icon' src={onlineIcon} />
                     &nbsp;
                  {rating.name}
                  &nbsp;
               {":"}
               &nbsp;
                  {rating.rating}
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : (
        ""
      )}
      {average ? <p className="average">Average : {average}</p> : ""}
    </div>
  );
};

export default TextContainer;

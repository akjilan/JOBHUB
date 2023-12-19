import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

const Rating = ({ value, max }) => {
  const stars = [];
  const roundedValue = Math.round(value * 2) / 2; // Round to nearest half

  for (let i = 1; i <= max; i++) {
    if (i <= roundedValue) {
      stars.push(
        <FontAwesomeIcon className="text-blue-900" key={i} icon={faStar} />
      );
    } else if (i - 0.5 === roundedValue) {
      stars.push(
        <FontAwesomeIcon
          className="text-blue-900"
          key={i}
          icon={faStarHalfAlt}
        />
      );
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={faStarEmpty} />);
    }
  }

  return <div>{stars}</div>;
};

export default Rating;

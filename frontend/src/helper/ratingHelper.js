import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const ratingHelper = (value) => {
  const element = [];
  if (typeof value === "number" && value > 0) {
    const parseValToString = value.toString().split(".");
    const wholeValue = Number(parseValToString[0]);
    const decValue = Number(parseValToString[1]);

    if (wholeValue) {
      for (var i = 0; i < wholeValue; i++) {
        element.push(
          <span>
            <FaStar />
          </span>
        );
      }
    }
    decValue && element.push(<FaStarHalfAlt />);
  } else {
    element.push(<FaRegStar />);
  }
  return element;
};

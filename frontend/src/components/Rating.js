import { ratingHelper } from "../helper";
export const Rating = ({ value, text }) => {
  return (
    <div className="rating">
      {ratingHelper(value)}
      {text && <span className="rating-text">{text}</span>}
    </div>
  );
};

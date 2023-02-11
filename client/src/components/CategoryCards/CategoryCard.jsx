import "./CategoryCard.scss";

const CategoryCard = (props) => {
  return (
    <div className="cat-card d-flex flex-column align-items-center justify-content-between">
      <img
        src={props.img}
        alt={props.alt}
        className="cat-icon d-none d-sm-block"
      />
      <p className="cat-text">{props.text}</p>
    </div>
  );
};

export default CategoryCard;

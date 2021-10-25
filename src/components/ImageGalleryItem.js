import "./styles.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ pictUrl, photographer, onClick, largImg }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={pictUrl}
        alt={photographer}
        className="ImageGalleryItem-image"
        onClick={onClick}
        data-source={largImg}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  pictUrl: PropTypes.string,
  photographer: PropTypes.string,
  onClick: PropTypes.func,
};

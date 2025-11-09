import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem.jsx";
import { ImageGalleryList } from "./ImageGallery.js";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <ImageGalleryList>
      {images.map((image) => (
        <ImageGalleryItem
          key={image.id}
          small={image.webformatURL}
          large={image.largeImageURL}
          onClick={onSelect}
        />
      ))}
    </ImageGalleryList>
  );
};

export default ImageGallery;
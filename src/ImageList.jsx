import ImageItem from "./ImageItem";
import "./imageList.css";
function ImageList({ imagesPlaceholder }) {
  return (
    <div className="image-list-container">
      {imagesPlaceholder.map((image, index) => {
        return <ImageItem image={image} key={index} />;
      })}
    </div>
  );
}
export default ImageList;

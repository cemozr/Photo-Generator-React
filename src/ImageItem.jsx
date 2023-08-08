import "./imageItem.css";

function ImageItem({ image }) {
  return (
    <div>
      <img className="imageItem" src={image.urls.small} />
    </div>
  );
}
export default ImageItem;

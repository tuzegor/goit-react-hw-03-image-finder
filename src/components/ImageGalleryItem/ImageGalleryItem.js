import styles from './ImageGalleryItem.module.css';
function ImageGalleryItem({
  id,
  tags,
  webformatURL,
  largeImageURL,
  openModal,
}) {
  return (
    <li id={id} className={styles.ImageGalleryItem}>
      <img
        className={styles.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={() => openModal(id, largeImageURL, tags)}
      />
    </li>
  );
}
export default ImageGalleryItem;

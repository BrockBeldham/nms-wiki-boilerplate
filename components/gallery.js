import PropTypes from 'prop-types';
import Dropzone from './dropzone';
import Input from './input';

import styles from './gallery.module.scss';

export default function Gallery({ gallery, onUpload, onChange }) {
  const renderGalleries = () => {
    return gallery.map((image, index) => (
      <li className={styles.galleryListItem} key={index}>
        <div className={styles.galleryImage} style={{ backgroundImage: `url(${image.preview})` }} />
        <Input frmItemClass='frmItemGallery' id={`gallery${index}`} type='text' label='Gallery Caption' onChange={(value) => 
          onChange(value, index)} />
      </li>
    ));
  };

  return (
    <>
      <Dropzone label='Other Images for Gallery' maxFiles={20} onUpload={(photos) => onUpload(photos)} />
      {gallery.length > 0 &&
        <ul className={styles.galleryList}>
          {renderGalleries()}
        </ul>
      }
    </>
  );
}

Gallery.propTypes = {
  gallery: PropTypes.array,
  onUpload: PropTypes.func,
  onChange: PropTypes.func
};
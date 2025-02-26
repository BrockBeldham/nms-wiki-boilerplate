import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';

import styles from './dropzone.module.scss';

function Dropzone({ label, maxFiles, onUpload }) {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/png': ['.png', '.jpg', '.jpeg', '.webp'] },
    maxFiles,
    maxSize: 10485760,
    onDrop: (acceptedFiles, fileRejections) => {
      if (fileRejections.length > 0) {
        setError('One of your images is larger than 10MB');
      } else {
        setFiles(acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
        onUpload(acceptedFiles);
      }
    }
  });
  
  const thumb = files.map((file, index) => (<div className={styles.thumb} style={{ backgroundImage: `url(${file.preview})` }} key={index} />))[0];

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const renderDropContent = () => {
    if (error) {
      return (
        <>
          <div className={`icon ${styles.dropIcon} ${isDragActive ? styles.dropIconActive : null}`}>
            <svg xmlns='http://www.w3.org/2000/svg' width='15' viewBox='0 0 24 24'>
              <use href='#svgUpload' />
            </svg>
          </div>
          <p className={styles.dropTextError}>{error}</p>
          <p className={styles.dropTextError}>Drag & drop image here or <button type='button' className={`btnLink ${styles.dropBtn}`}>click to browse</button></p>
        </>
      );
    } else {
      return (
        <>
          <div className={`icon ${styles.dropIcon} ${isDragActive ? styles.dropIconActive : null}`}>
            <svg xmlns='http://www.w3.org/2000/svg' width='15' viewBox='0 0 24 24'>
              <use href='#svgUpload' />
            </svg>
          </div>
          <p className={styles.dropText}>Drag & drop image here or <button type='button' className={`btnLink ${styles.dropBtn}`}>click to browse</button></p>
        </>
      );
    }
  };

  return (
    <div className={styles.container}>
      {label &&
        <label className='frmLabel frmLabelShow'>{label}</label>
      }
      <div {...getRootProps({ className: styles.dropzone })}>
        <input {...getInputProps()} />
        {(files.length === 0 || files.length > 1)
          ? renderDropContent()
          : thumb
        }

      </div>
      <p className={styles.note}><strong>Editor&apos;s note:</strong> Images are not uploaded to the wiki from this site or saved in any way. You need to upload to the wiki yourself. This upload tool is to take the image name and place it into the wiki page code.</p>
    </div>
  );
}

Dropzone.propTypes = {
  label: PropTypes.string,
  maxFiles: PropTypes.number,
  onUpload: PropTypes.func
};

export default Dropzone;

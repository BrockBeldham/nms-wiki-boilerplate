import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './modal';

import styles from './tooltip.module.scss';

export default function Tooltip({ overlay }) {
  const [openTooltip, setOpenTooltip] = useState(false);

  const renderOverlay = () => {
    switch (true) {
      case typeof overlay === 'string':
        return <p>{overlay}</p>;
    
      default:
        return overlay;
    }
  };

  return (
    <>
      <button className={`icon iconWhite ${styles.tooltipIcon}`} onClick={() => setOpenTooltip(true)}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
          <use href='#svgHelp'/>
        </svg>
      </button>
      {openTooltip &&
        <Modal onClose={() => setOpenTooltip(false)}>
          {renderOverlay()}
        </Modal>
      }
    </>
  );
}

Tooltip.propTypes = {
  overlay: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ])
};
import PropTypes from 'prop-types';

import styles from './code-view.module.scss';

export default function CodeView({ children, code }) {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {children}
      </div>
      <div className={styles.editor}>
        <pre className={styles.editorCode}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}

CodeView.propTypes = {
  children: PropTypes.array,
  code: PropTypes.string
};
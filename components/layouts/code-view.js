import PropTypes from 'prop-types';
import Link from 'next/link';
import Footer from './footer';
import * as ga from '../../lib/ga';

import styles from './code-view.module.scss';

export default function CodeView({ children, code, title, viewCode, closeEditor }) {
  return (
    <>
      <Link href='/'>
        <a className={`btn ${styles.backBtn}`}>Back</a>
      </Link>
      <div className={styles.intro}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>Creating a wiki page is easy! Just fill out this form as completely as you can. Once the form is completed, click &apos;Copy Code&apos; to copy the Markdown to your clipboard and then click &apos;Create Page&apos; to open the wiki in a new window. Paste the Markdown code into the Wiki editor and hit &apos;Save Changes&apos;!</p>
        <p className={styles.text}>If you notice any errors or bugs on this page please DM <a href='https://www.reddit.com/user/hotbrowndoubledouble' target='_blank' rel='noreferrer' onClick={() => ga.event('External Link', 'Title', '/u/hotbrowndoubledouble')}>HotbrownDoubleDouble</a> on Reddit.</p>
      </div>
      <div className={styles.container}>
        <div className={styles.form}>
          {children}
        </div>
        <div className={`${styles.editor} ${viewCode ? styles.editorShow : ''}`}>
          <button
            className={`icon ${styles.editorClose}`}
            onClick={() => {
              ga.event('Close Editor', title, window.innerWidth);
              closeEditor();
            }}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 360'>
              <use href='#svgClose' />
            </svg>
          </button>
          <pre className={styles.editorCode}>
            <code>{code}</code>
          </pre>
        </div>
      </div>
      <Footer />
    </>
  );
}

CodeView.propTypes = {
  children: PropTypes.array,
  code: PropTypes.string,
  title: PropTypes.string,
  viewCode: PropTypes.bool,
  closeEditor: PropTypes.func
};
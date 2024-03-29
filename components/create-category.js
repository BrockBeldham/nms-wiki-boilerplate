import PropTypes from 'prop-types';
import * as ga from '../lib/ga';
import useCopyToClipboard from '../hooks/copy-to-clipboard';

import styles from './create-category.module.scss';

export default function CreateCategory({ type, title, parentTitle }) {
  const [codeCopied, handleCopy] = useCopyToClipboard();

  const categoryTemplate = {
    region: `This category is for content related to the '''${title}''' [[region]].

[[Category: Regions]]
[[Category: ${parentTitle}]]`,
    system: `This category is for content related to the '''${title}''' [[star system]].

[[Category: Star systems]]
[[Category: ${parentTitle}]]`,
    planet: `This category is for content related to the '''${title}''' [[planet]].

[[Category: Planets]]
[[Category: ${parentTitle}]]`,
    moon: `This category is for content related to the '''${title}''' [[moon]].

[[Category: Moons]]
[[Category: ${parentTitle}]]`
  };

  return (
    <>
      <h2 className={styles.title}>Create Category</h2>
      <p className={styles.text}>When you create a new page, you should always create a category. This keeps your pages organized in a hierarchical structure. Simple click &quot;copy category&quot; and then click &quot;create category&quot; to open the Wiki and create a category for this page.</p>
      <div className={styles.btnContainer}>
        <button type='button' className={`btn whiteBtn ${styles.btn}`} onClick={() => {
          handleCopy(categoryTemplate[type]);
          ga.event('click', 'Copy Category', title);
        }}>
          {codeCopied ? 'Category Copied' : 'Copy Category'}
        </button>
        <a href={`https://nomanssky.fandom.com/wiki/Category:${title.replace(/ /g,'_')}?action=edit`}
          className={`btn whiteBtn ${styles.btn}`}
          target='_blank'
          rel='noreferrer'
          onClick={() => ga.event('click', 'Create Category', title)}>
          Create Category
        </a>
      </div>
    </>
  );
}

CreateCategory.propTypes = {
  gaTitle: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  parentTitle: PropTypes.string
};
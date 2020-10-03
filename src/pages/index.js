import React from 'react';
import classnames from 'classnames';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout>
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <img alt={siteConfig.title} src="./img/lf_logo.svg" className={styles.heroLogo} />
          <p className={styles.heroTitle}>{siteConfig.tagline} 📓</p>
          <Link
            className="button button--primary button--lg"
            to={`${useBaseUrl('docs/introduction')}`}
          >
            Let's Go!
          </Link>
        </div>
      </header>
    </Layout>
  );
}

export default Home;

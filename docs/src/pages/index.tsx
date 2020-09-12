import * as React from 'react';
import clsx from 'clsx';

import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

const features = [
    {
        title: 'Easy to Use',
        icon: '👩‍💻',
        description: 'Easy as pie 🥧 usage. Install, import, and starting using right away!',
    },
    {
        title: 'Customization Ready',
        icon: '💅',
        description: 'Adapt Pretty Checkbox React so it fits right into your design system 😎',
    },
    {
        title: 'Powered by React',
        icon: '🚀',
        description: 'Powered by React, Pretty Checkbox React is uber fast and has a low profile.',
    },
];

function Feature({ imageUrl = '', title, description, icon }) {
    const imgUrl = useBaseUrl(imageUrl);

    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img className={styles.featureImage} src={imgUrl} alt={title} />
                </div>
            )}
            {icon ? (
                <p className="text--center" style={{ fontSize: '4em' }}>
                    {icon}
                </p>
            ) : null}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;

    return (
        <Layout title={siteConfig.title} description={siteConfig.tagline}>
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;

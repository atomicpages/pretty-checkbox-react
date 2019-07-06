import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

export default ({ children }) => (
    <Layout>
        <SEO title={post.frontmatter.title} />
        {children}
    </Layout>
)
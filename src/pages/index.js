import React from 'react';

import { navigate } from '@reach/router';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
    React.useLayoutEffect(() => {
        if (window.location.pathname === '/') {
            navigate('/home/');
        }
    });

    return (
        <Layout>
            <SEO title="Home" />
        </Layout>
    );
};

export default IndexPage;

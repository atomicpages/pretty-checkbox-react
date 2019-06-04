/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import React from 'react';
import { graphql } from 'gatsby';
import rehypeReact from 'rehype-react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import ReactLive from '../components/ReactLive';
import PropsTable from '../components/props/PropsTable';

import docs from '../data/props.json';

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: {
        code: ReactLive,
        pre: props => {
            if (
                props.children &&
                props.children[0]
            ) {
                return <pre {...props} />;
            }

            return <div {...props} />;
        },
        table: props => <table {...props} className="content__table" />,
    },
}).Compiler;

const ToggleProps = ({ displayName }) => {
    const [state, dispatch] = React.useReducer(state => !state, false);

    return (
        <>
            <button className="link toggle-props" onClick={dispatch}>{state ? 'Hide' : 'Show'} Props</button>
            <PropsTable component={docs[displayName]} show={state} />
        </>
    );
};

// eslint-disable-next-line react/display-name
export default ({ data }) => {
    const post = data.markdownRemark;

    return (
        <Layout>
            <SEO title={post.frontmatter.title} />
            <div>
                <h1>{post.frontmatter.title}</h1>
                {docs[post.frontmatter.displayName] ? (
                    <ToggleProps displayName={post.frontmatter.displayName} />
                ) : null}
                {renderAst(post.htmlAst)}
            </div>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            htmlAst
            frontmatter {
                title
                displayName
            }
        }
    }
`;

import React from 'react';
import { Title } from '../components/Title';
import { Card } from '../components/Card';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/prism';

const basicUsgae = `import { Checkbox } from 'pretty-checkbox-react';

function Demo() {
    return <Checkbox>Aswesome!</Checkbox>;
}

ReactDOM.render(<Demo>, document.querySelector('body'));
`;

const install = `> yarn add pretty-checkbox-react pretty-checkbox # or
> npm i pretty-checkbox-react pretty-checkbox
`;

function Installation() {
    return (
        <>
            <Title>Installation</Title>
            <div className="content">
                <p>
                    <span className="s-highlight">Step 1</span> {' : Download from '}
                    <a href="https://yarnpkg.com/en/package/pretty-checkbox" rel="nofollow noopener noreferrer" target="_blank">yarn</a> {' or '}
                    <a href="https://www.npmjs.com/package/pretty-checkbox" rel="nofollow noopener noreferrer" target="_blank">npm</a>
                </p>
                <Card>
                    <SyntaxHighlighter language="bash" style={darcula}>{install}</SyntaxHighlighter>
                </Card>
                <p><strong>Alternatively</strong>, you can also use CDN link</p>
                <Card>
                    <SyntaxHighlighter style={darcula}>{'https://cdn.jsdelivr.net/npm/pretty-checkbox@3.0/dist/pretty-checkbox.min.css'}</SyntaxHighlighter>
                </Card>
                <p>
                    <span className="s-highlight">Step 2</span>
                    {' : Add '}
                    <strong>dist/pretty-checkbox.min.css</strong>
                    {' file in your html or import '}
                    <strong>src/pretty-checkbox.scss</strong>
                    {' file in your scss file'}
                </p>
                <Card>
                    <SyntaxHighlighter language="scss" style={darcula}>{'@import \'~pretty-checkbox/src/pretty-checkbox.scss\';'}</SyntaxHighlighter>
                </Card>
                <p>
                    <span className="s-highlight">Step 3</span>
                    {' : Import the component and begin using! Can be used with '}
                    <i>Bootstrap</i>{', '}
                    <i>Foundation</i>{', '}
                    <i>Bulma</i>
                    {' frameworks.'}
                </p>
                <Card>
                    <SyntaxHighlighter language="jsx" style={darcula}>{basicUsgae}</SyntaxHighlighter>
                </Card>
            </div>
        </>
    );
}

export default Installation;
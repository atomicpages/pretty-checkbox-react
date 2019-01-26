// @flow

import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/prism';

// import { Checkbox } from 'pretty-checkbox-react';

import { Title } from '../components/Title';
// import { CollapseContainer } from '../components/CollapseContainer';

const scss = `// @import ...

.#{$pretty--class-name}.my-icon {
    @extend .#{$pretty--class-name}.p-icon;
}`;

const jsx = `import { Checkbox } from 'pretty-checkbox-react';

<Checkbox className="my-icon"
    icon={<i className="fas fas-question-circle" />}>
    Label
</Checkbox>`;

const customRender = `<Checkbox>{({ className, node }) => (
    <div className={classNames("state", className, "custom-handle")}>
        <label>My custom label</label>
    </div>
)}</Checkbox>`;

const QA = ({ title, children }: { title: React.Node, children: React.Node }) => (
    <li>
        <p className="q-title">{title}</p>
        <p className="q-resp">{children}</p>
    </li>
);

function FAQ() {
    return (
        <>
            <Title>FAQ</Title>
            <div className="content">
                <ol>
                    <QA title={<>Formik overrides <code>p-icon</code> styles</>}>
                        If you are using Formik and adding a pretty-checkbox or pretty-checkbox-react component, then you might be seeing visual discrepancies.
                        We can get around this by using the render prop or child render function exposed by <strong>pretty-react-checkbox</strong>.
                        The easiest way to get around this is to custom build pretty-checkbox <code>.scss</code> source files.
                        Once you have that in place we need to make a few tweaks.
                        <SyntaxHighlighter language="scss" style={darcula}>{scss}</SyntaxHighlighter>
                        With the magic of using Sass <code>@extends</code> we can essentially "copy" the pretty-checkbox base styles to our own selector.
                        After this, our usage becomes a bit different as well.
                        <SyntaxHighlighter language="jsx" style={darcula}>{jsx}</SyntaxHighlighter>
                        Formik will still apply styles to <code>p-icon</code>, but the styles shouldn't clash anymore.
                    </QA>
                    <QA title="How can I customize pretty-checkbox state div?">
                        Good question! All components offer <code>render</code> prop and <code>children</code> render function support. It's as easy as this:
                        <SyntaxHighlighter language="jsx" style={darcula}>{customRender}</SyntaxHighlighter>
                        By default the function will return an object containing a <code>className</code> that can be applied -- this is inferred based on the props you pass your base component.
                        You can ignore these outright if you wish. Using this approach you can also harness the states exposed by pretty-checkbox.
                    </QA>
                </ol>
            </div>
        </>
    );
}

export default FAQ;

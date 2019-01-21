import React from 'react';

import { Title } from '../components/Title';
import { CollapseContainer } from '../components/CollapseContainer';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/styles/prism';

const settings = `// If you felt the name is not-so-pretty,
// you can always change!

$pretty--class-name: pretty;

// are you sure, you wanna change my handpicked
// awesome super duper colors?

$pretty--color-default: #bdc3c7;
$pretty--color-primary: #428bca;
$pretty--color-info: #5bc0de;
$pretty--color-success: #5cb85c;
$pretty--color-warning: #f0ad4e;
$pretty--color-danger: #d9534f;
$pretty--color-dark: #5a656b;

// uh, boring z-index stuff, who cares.

$pretty--z-index-back: 0;
$pretty--z-index-between: 1;
$pretty--z-index-front: 2;

// nobody will change this.

$pretty--debug: false;
$pretty--dev-err: "Invalid input type";`;

const scss_imports = `/* REQUIRED */
@import "~pretty-checkbox/scss/variables";
@import "~pretty-checkbox/scss/core";

/* OPTIONALS */
@import "~pretty-checkbox/scss/elements/default/fill";
@import "~pretty-checkbox/scss/elements/default/outline";
@import "~pretty-checkbox/scss/elements/default/thick";

@import "~pretty-checkbox/scss/elements/font-icon/general";

@import "~pretty-checkbox/scss/elements/svg/general";

@import "~pretty-checkbox/scss/elements/image/general";

@import "~pretty-checkbox/scss/elements/switch/general";
@import "~pretty-checkbox/scss/elements/switch/fill";
@import "~pretty-checkbox/scss/elements/switch/slim";

@import "~pretty-checkbox/scss/extras/toggle";
@import "~pretty-checkbox/scss/extras/plain";
@import "~pretty-checkbox/scss/extras/round";
@import "~pretty-checkbox/scss/extras/curve";
@import "~pretty-checkbox/scss/extras/animation";
@import "~pretty-checkbox/scss/extras/disabled";
@import "~pretty-checkbox/scss/extras/locked";
@import "~pretty-checkbox/scss/extras/colors";
@import "~pretty-checkbox/scss/extras/print";

@import "~pretty-checkbox/scss/states/hover";
@import "~pretty-checkbox/scss/states/focus";
@import "~pretty-checkbox/scss/states/indeterminate";`;

function Customize() {
    return (
        <>
            <Title>SCSS Customize</Title>
            <div className="content">
                <CollapseContainer title="Settings"
                    canCollapse={false}
                    demo={<SyntaxHighlighter language="scss" style={darcula}>{settings}</SyntaxHighlighter>} />
                <CollapseContainer title="Import"
                    canCollapse={false}
                    demo={<SyntaxHighlighter language="scss" style={darcula}>{scss_imports}</SyntaxHighlighter>} />
            </div>
        </>
    );
}

export default Customize;

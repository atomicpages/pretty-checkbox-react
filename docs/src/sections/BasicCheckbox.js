import React from 'react';

import { Checkbox } from 'pretty-checkbox-react';

import { Title } from '../components/Title';
import { CollapseContainer } from '../components/CollapseContainer';

import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live';

const scope = { Checkbox };

const basicCheckbox = `// make changes and I'll update!

<>
    <Checkbox>Default</Checkbox>
    <Checkbox style="fill">Fill</Checkbox>
    <Checkbox style="thick">Thick</Checkbox>
</>
`;

const basicCheckboxCurve = `<>
    <Checkbox shape="curve">Default</Checkbox>
    <Checkbox shape="curve" style="fill">Fill</Checkbox>
    <Checkbox shape="curve" style="thick">Thick</Checkbox>
</>
`;

const basicCheckboxRound = `<>
    <Checkbox shape="round">Default</Checkbox>
    <Checkbox shape="round" style="fill">Fill</Checkbox>
    <Checkbox shape="round" style="thick">Thick</Checkbox>
</>
`;

function BasicCheckbox() {
    return (
        <>
            <Title>Basic Checkbox</Title>
            <div className="content">
                <p>These are simple checkboxes with three shapes: <strong>default</strong>, <strong>curve</strong>, and <strong>round</strong>. Use the <strong>shape</strong> prop to customize.</p>
                <p>Additionally, there are two variants, or <strong>style</strong> of checkboxes: <strong>fill</strong> and <strong>thick</strong>. Customize these via the <strong>style</strong> prop.</p>
            </div>
            <LiveProvider code={basicCheckbox} scope={scope}>
                <CollapseContainer title="Default" demo={<LivePreview />}>
                    <>
                        <LiveEditor />
                        <LiveError />
                    </>
                </CollapseContainer>
            </LiveProvider>
            <LiveProvider code={basicCheckboxCurve} scope={scope}>
                <CollapseContainer title="Curve" demo={<LivePreview />}>
                    <>
                        <LiveEditor />
                        <LiveError />
                    </>
                </CollapseContainer>
            </LiveProvider>
            <LiveProvider code={basicCheckboxRound} scope={scope}>
                <CollapseContainer title="Round" demo={<LivePreview />}>
                    <>
                        <LiveEditor />
                        <LiveError />
                    </>
                </CollapseContainer>
            </LiveProvider>
        </>
    );
}

export default BasicCheckbox;

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
    <Checkbox className="p-fill">Fill</Checkbox>
    <Checkbox className="p-thick">Thick</Checkbox>
</>
`;

const basicCheckboxCurve = `<>
    <Checkbox className="p-curve">Default</Checkbox>
    <Checkbox className="p-curve p-fill">Fill</Checkbox>
    <Checkbox className="p-curve p-thick">Thick</Checkbox>
</>
`;

const basicCheckboxRound = `<>
    <Checkbox className="p-round">Default</Checkbox>
    <Checkbox className="p-round p-fill">Fill</Checkbox>
    <Checkbox className="p-round p-thick">Thick</Checkbox>
</>
`;

function BasicCheckbox() {
    return (
        <>
            <Title>Basic Checkbox</Title>
            <div className="content">
                <p>These are simple checkboxes with three shapes. Add class <strong>p-default</strong> as like mentioned in above example.</p>
                    <p>By default, it will be in <i>Square</i> shape. To change, add class <strong>p-curve</strong> or <strong>p-round</strong>.</p>
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
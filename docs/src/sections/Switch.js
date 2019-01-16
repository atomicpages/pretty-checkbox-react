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

const basicSwitch = `<>
    <Checkbox className="p-switch">Outline</Checkbox>
    <Checkbox className="p-switch p-fill">Fill</Checkbox>
    <Checkbox className="p-switch p-slim">Slim</Checkbox>
</>`;

function Switch() {
    return (
        <>
            <Title>Switch</Title>
            <div className="content">
                <p>Add class <strong>p-switch</strong>. For shapes add class, <strong>p-outline</strong> or <strong>p-fill</strong> or <strong>p-slim</strong></p>
            </div>
            <LiveProvider code={basicSwitch} scope={scope}>
                <CollapseContainer title="iOS Style" demo={<LivePreview />}>
                    <>
                        <LiveEditor />
                        <LiveError />
                    </>
                </CollapseContainer>
            </LiveProvider>
        </>
    );
}

export default Switch;
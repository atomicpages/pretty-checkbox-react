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

const basicColors = `<>
    <Checkbox color="p-primary">Primary</Checkbox>
    <Checkbox color="p-success">Success</Checkbox>
    <Checkbox color="p-info">Info</Checkbox>
    <Checkbox color="p-warning">Warning</Checkbox>
    <Checkbox color="p-danger">Danger</Checkbox>
</>`;

const mixedColors = `<>
    <Checkbox className="p-round p-thick" color="p-primary-o">Primary</Checkbox>
    <Checkbox className="p-round" color="p-success-o">Success</Checkbox>
    <Checkbox className="p-fill" color="p-info">Info</Checkbox>
    <Checkbox className="p-curve p-thick" color="p-warning-o">Warning</Checkbox>
    <Checkbox className="p-curve p-thick" color="p-danger-o">Danger</Checkbox>
</>`;

function Colors() {
    return (
        <>
            <Title>Colors</Title>
            <div className="content">
                <p>There are five colors. <span class="color-preview primary"></span> <span class="color-preview success"></span> <span class="color-preview warning"></span> <span class="color-preview info"></span> <span class="color-preview danger"></span>. Can be used as <i>Solid</i> ( <strong>p-primary</strong> ) or <i>Outline</i> ( <strong>p-primary-o</strong> ).</p>
                <p>To apply colors, add class <strong>p-primary</strong> to <i>.state</i> class inside <i>.pretty</i></p>
            </div>
            <LiveProvider code={basicColors} scope={scope}>
                <CollapseContainer title="Solid" demo={<LivePreview />}>
                    <>
                        <LiveEditor />
                        <LiveError />
                    </>
                </CollapseContainer>
            </LiveProvider>
            <LiveProvider code={mixedColors} scope={scope}>
                <CollapseContainer title="Mixed" demo={<LivePreview />}>
                    <>
                        <LiveEditor />
                        <LiveError />
                    </>
                </CollapseContainer>
            </LiveProvider>
        </>
    );
}

export default Colors;
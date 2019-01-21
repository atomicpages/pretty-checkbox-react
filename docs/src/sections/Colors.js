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
    <Checkbox color="primary">Primary</Checkbox>
    <Checkbox color="success">Success</Checkbox>
    <Checkbox color="info">Info</Checkbox>
    <Checkbox color="warning">Warning</Checkbox>
    <Checkbox color="danger">Danger</Checkbox>
</>`;

const mixedColors = `<>
    <Checkbox shape="round" style="thick" color="primary-o">Primary</Checkbox>
    <Checkbox shape="round" color="success-o">Success</Checkbox>
    <Checkbox style="fill" color="info">Info</Checkbox>
    <Checkbox shape="curve" style="thick" color="warning-o">Warning</Checkbox>
    <Checkbox shape="curve" style="thick" color="danger-o">Danger</Checkbox>
</>`;

function Colors() {
    return (
        <>
            <Title>Colors</Title>
            <div className="content">
                <p>There are five colors. <span className="color-preview primary"></span>
                    {' '}<span className="color-preview success"></span>
                    {' '}<span className="color-preview warning"></span>
                    {' '}<span className="color-preview info"></span>
                    {' '}<span className="color-preview danger"></span>.
                    Can be used as <i>Solid</i> ( <strong>primary</strong> ) or <i>Outline</i> ( <strong>primary-o</strong> ).
                </p>
                <p>To apply these colors use the <strong>color</strong> prop with any of the above values.</p>
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

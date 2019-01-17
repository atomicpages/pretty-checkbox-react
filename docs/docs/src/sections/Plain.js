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

const plainExample = `<>
    <Checkbox plain
        shape="round"
        color="warning-o"
        animation="smooth"
        icon={<i className="mdi mdi-star" />}>Favorite</Checkbox>
    <Checkbox plain
        shape="round"
        color="success-o"
        animation="smooth">Add</Checkbox>
</>`;

function Image() {
    return (
        <>
            <Title>Plain</Title>
            <div className="content">
                <p>To remove the border ( <i>when checkbox is checked</i> ) add use the <strong>plain</strong> prop.</p>
                <LiveProvider code={plainExample} scope={scope}>
                    <CollapseContainer title="General" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
            </div>
        </>
    );
}

export default Image;

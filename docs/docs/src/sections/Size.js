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

const sizeExample = `<>
    <Checkbox bigger
        shape="round"
        color="info"
        animation="jelly"
        icon={<i className="mdi mdi-check" />}>done</Checkbox>
    <Checkbox bigger color="danger" animation="smooth">clear</Checkbox>
</>`;

function Size() {
    return (
        <>
            <Title>Size</Title>
            <div className="content">
                <p>Basically, all the checkbox and radio buttons are sized based on the font size.
                    Bigger the font size, bigger the checkbox and radio. Sometimes, you might need to scale it bit bigger.
                    To do so, use the <strong>bigger</strong> props.
                    Alternatively, you can specify <strong>font-size</strong> on <i>.pretty</i>.</p>
                <LiveProvider code={sizeExample} scope={scope}>
                    <CollapseContainer title="Bigger" demo={<LivePreview />}>
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

export default Size;

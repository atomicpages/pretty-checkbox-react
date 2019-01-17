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

const generalFontExample = `<>
    <Checkbox shape="round" icon={<i className="mdi mdi-check" />}>Pay Bills</Checkbox>
    <Checkbox shape="curve" icon={<i className="mdi mdi-close" />}>Fuel Refill</Checkbox>
    <Checkbox icon={<i className="mdi mdi-close-outline" />}>Buy Groceries</Checkbox>
</>`;

const scope = { Checkbox };

function FontIcons() {
    return (
        <>
            <Title>Font Icons</Title>
            <div className="content">
                <p><strong>pretty-checkbox-react</strong> will <i>automatically</i> add the appropriate selectors for you on your <i>i</i> tag. Simple add your font icon as a prop and the component will take care of the rest!</p>
            </div>
            <LiveProvider code={generalFontExample} scope={scope}>
                <CollapseContainer title="Solid" demo={<LivePreview />}>
                    <>
                        <LiveEditor />
                        <LiveError />
                    </>
                </CollapseContainer>
            </LiveProvider>
        </>
    );
}

export default FontIcons;

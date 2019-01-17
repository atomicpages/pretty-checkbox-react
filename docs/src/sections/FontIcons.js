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
                <LiveProvider code={generalFontExample} scope={scope}>
                    <CollapseContainer title="General" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <p className="note">This library doesnt comes with any font icons. You need to add appropriate font
                    icon library in your application. In above example, we used <strong>mdi mdi-check</strong>,
                    which is from <a href="https://materialdesignicons.com/" target="_blank" rel="nofollow noreferrer noopener">Material design icons</a>
                {' '}library. If you wish to use those icons you will need to add that library yourself.</p>
            </div>
        </>
    );
}

export default FontIcons;

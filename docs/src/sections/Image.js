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

const generalImageExample = `
<>
    <Checkbox plain image={<img src="https://lokesh-coder.github.io/pretty-checkbox/img/checked/001.png" />}>Agree</Checkbox>
    <Checkbox plain image={<img src="https://lokesh-coder.github.io/pretty-checkbox/img/checked/002.png" />}>Subscribe</Checkbox>
    <Checkbox plain image={<img src="https://lokesh-coder.github.io/pretty-checkbox/img/checked/003.png" />}>Cancel</Checkbox>
    <Checkbox plain image={<img src="https://lokesh-coder.github.io/pretty-checkbox/img/checked/004.png" />}>Yes</Checkbox>
</>
`;

function Image() {
    return (
        <>
            <Title>Image</Title>
            <div className="content">
                <p>Adding image is also similar approach like above. Simply use the <strong>img</strong> prop the rest will be taken care of for you.</p>
                <LiveProvider code={generalImageExample} scope={scope}>
                    <CollapseContainer title="General" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <p className="note">Good news is that images are automatically resized to fit in the checkbox. Nevertheless, it is wise to use small, transparent images for better results.</p>
            </div>
        </>
    );
}

export default Image;

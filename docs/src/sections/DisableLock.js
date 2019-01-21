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

const disabledExample = `// readOnly used for this example to prevent console errors from React

<>
    <Checkbox shape="round"
        color="success"
        disabled
        checked
        inputProps={{ readOnly: true }}
        icon={<i className="mdi mdi-check" />}>Checked</Checkbox>
    <Checkbox disabled>Not Checked</Checkbox>
</>`;

const lockedExample = `// readOnly used for this example to prevent console errors from React

<>
    <Checkbox shape="round"
        color="success"
        locked
        checked
        inputProps={{ readOnly: true }}
        icon={<i className="mdi mdi-check" />}>Checked</Checkbox>
    <Checkbox locked>Not Checked</Checkbox>
</>`;

function DisableLock() {
    return (
        <>
            <Title>Disable</Title>
            <div className="content">
                <p>Normal <strong>disabled</strong> attribute in checkbox is enough.</p>
                <LiveProvider code={disabledExample} scope={scope}>
                    <CollapseContainer title="General" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
            </div>
            <Title>Lock</Title>
            <div className="content">
                <p>It is quite similar to <i>disable</i>, but the only difference is, it will lock and make it look like active. To lock, use the <strong>locked</strong> prop.</p>
                <LiveProvider code={lockedExample} scope={scope}>
                    <CollapseContainer title="Lock" demo={<LivePreview />}>
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

export default DisableLock;

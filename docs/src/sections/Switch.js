import React from 'react';

import { Switch as ReactSwitch } from 'pretty-checkbox-react';

import { Title } from '../components/Title';
import { CollapseContainer } from '../components/CollapseContainer';

import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live';

const scope = { ReactSwitch };

const basicSwitch = `<>
    <ReactSwitch>Outline</ReactSwitch>
    <ReactSwitch shape="fill">Fill</ReactSwitch>
    <ReactSwitch shape="slim">Slim</ReactSwitch>
</>`;

function Switch() {
    return (
        <>
            <Title>Switch</Title>
            <div className="content">
                <p>Use the <strong>Switch</strong> component to start using switches as a checkbox or a radio.
                Customize the feel of switches via <strong>shape</strong> props. Use any of the following values:
                {' '}<strong>outline</strong> (default), <strong>fill</strong>, or <strong>slim</strong>.</p>
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

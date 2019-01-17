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

const smoothExample = `
<>
    <Checkbox shape="round" color="primary" animation="smooth">Monday</Checkbox>
    <Checkbox shape="round" color="success" icon={<i className="mdi mdi-check" />} animation="smooth">Tuesday</Checkbox>
    <Checkbox color="danger-o" icon={<i className="mdi mdi-close" />} animation="smooth">Wednesday</Checkbox>
    <Checkbox shape="curve" style="thick" color="warning" animation="smooth">Thursday</Checkbox>
    <Checkbox shape="curve" style="thick" color="danger-o" animation="smooth">Friday</Checkbox>
</>
`;

const jellyExample = `
<>
    <Checkbox shape="round" color="primary" icon={<i className="mdi mdi-check" />} animation="jelly">Interested</Checkbox>
    <Checkbox color="info-o" icon={<i className="mdi mdi-check-all" />} animation="jelly">All</Checkbox>
    <Checkbox shape="curve" color="danger" icon={<i className="mdi mdi-bug" />} animation="jelly">Bug</Checkbox>
</>
`;

const tadaExample = `
<>
    <Checkbox shape="round" color="primary-o" icon={<i className="mdi mdi-heart" />} animation="tada">Good</Checkbox>
    <Checkbox plain icon={<i className="mdi mdi-weather-night" />} animation="tada">Night</Checkbox>
    <Checkbox style="fill" color="danger" icon={<i className="mdi mdi-skull" />} animation="tada">Sweetheart</Checkbox>
</>
`;

const rotateExample = `
<>
    <Checkbox color="success" icon={<i className="mdi mdi-check" />} animation="rotate">Friends</Checkbox>
    <Checkbox color="danger-o" icon={<i className="mdi mdi-close" />} animation="rotate">Family</Checkbox>
</>
`;

const pulseExample = `
<>
    <Checkbox shape="round" color="success" icon={<i className="mdi mdi-check" />} animation="pulse">Friends</Checkbox>
    <Checkbox color="warning-o" animation="pulse">Family</Checkbox>
</>
`;

function Image() {
    return (
        <>
            <Title>Animations</Title>
            <div className="content">
                <p>To animate, use the <strong>animation</strong> prop with any of the following values:
                    {' '}<strong>smooth</strong>, <strong>jelly</strong>,
                    {' '}<strong>tada</strong>, <strong>rotate</strong>, or
                    {' '}<strong>pulse</strong>.
                </p>
                <LiveProvider code={smoothExample} scope={scope}>
                    <CollapseContainer title="Smooth" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <LiveProvider code={jellyExample} scope={scope}>
                    <CollapseContainer title="Jelly" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <LiveProvider code={tadaExample} scope={scope}>
                    <CollapseContainer title="Tada" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <LiveProvider code={rotateExample} scope={scope}>
                    <CollapseContainer title="Rotate" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <LiveProvider code={pulseExample} scope={scope}>
                    <CollapseContainer title="Pulse" demo={<LivePreview />}>
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

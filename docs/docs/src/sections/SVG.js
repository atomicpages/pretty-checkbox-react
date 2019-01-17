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

const generalSVGExample = `
const check = (
    <svg viewBox="0 0 20 20">
        <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z" style={{ stroke: 'white', fill: 'white' }}></path>
    </svg>
);

const lock = (
    <svg viewBox="0 0 8 8">
        <path fill="#65bbd2" d="M4 0c-1.099 0-2 .901-2 2v1h-1v4h6v-4h-1v-1c0-1.099-.901-2-2-2zm0 1c.561 0 1 .439 1 1v1h-2v-1c0-.561.439-1 1-1z"></path>
    </svg>
);

render(
    <>
        <Checkbox shape="curve" color="success" svg={check}>Recurring</Checkbox>
        <Checkbox plain svg={<img src="https://lokesh-coder.github.io/pretty-checkbox/svg/open-iconic/task.svg" />}>Done</Checkbox>
        <Checkbox plain svg={lock}>Lock</Checkbox>
    </>
)
`;

function SVG() {
    return (
        <>
            <Title>SVG</Title>
            <div className="content">
                <p>Adding svg icon is very similar to adding font icons and like font icons, the appropriate class names will be automatically applied.
                    Simply use the <strong>svg</strong> prop with an svg directly or as an <strong>img</strong>.</p>
                <LiveProvider code={generalSVGExample} scope={scope} noInline={true}>
                    <CollapseContainer title="General" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <p className="note">A note from the author of <strong>pretty-checkbox</strong>: SVG's are quite different and unpredictable to apply colors properly. This library
                    tries to color it based on few assumptions. Sometimes, it might return weird results. Try not to
                    curse the original author in those cases.</p>
            </div>
        </>
    );
}

export default SVG;

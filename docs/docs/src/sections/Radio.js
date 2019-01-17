import React from 'react';

import { Radio, Switch } from 'pretty-checkbox-react';

import { Title } from '../components/Title';
import { CollapseContainer } from '../components/CollapseContainer';

import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live';

const scope = { Radio, Switch };

const basicExample = `<>
    <Radio name="radio-1">Same Day</Radio>
    <Radio name="radio-1">Next Dat</Radio>
    <Radio name="radio-1">Standard Ground</Radio>
</>`;

const colorsExample = `<>
    <Radio color="primary-o" shape="curve" name="radio-2">Primary</Radio>
    <Radio color="success-o" shape="curve" name="radio-2">Success</Radio>
    <Radio color="info-o" shape="curve" name="radio-2">Info</Radio>
    <Radio color="warning-o" shape="curve" name="radio-2">Warning</Radio>
    <Radio color="danger-o" shape="curve" name="radio-2">Danger</Radio>
</>`;

const solidColorsAndIconsExample = `<>
    <Radio color="primary" icon={<i className="mdi mdi-check" />} name="radio-3">New York</Radio>
    <Radio color="success" icon={<i className="mdi mdi-check" />} name="radio-3">Paris</Radio>
    <Radio color="info" icon={<i className="mdi mdi-check" />} name="radio-3">Dubai</Radio>
    <Radio color="warning" icon={<i className="mdi mdi-check" />} name="radio-3">Tokyo</Radio>
    <Radio color="danger" icon={<i className="mdi mdi-check" />} name="radio-3">Istanbul</Radio>
</>`;

const outlineColorsExample = `<>
    <Radio color="primary-o" icon={<i className="mdi mdi-check" />} name="radio-4">Dollar</Radio>
    <Radio color="success-o" icon={<i className="mdi mdi-check" />} name="radio-4">Euro</Radio>
    <Radio color="info-o" icon={<i className="mdi mdi-check" />} name="radio-4">Dinar</Radio>
    <Radio color="warning-o" icon={<i className="mdi mdi-check" />} name="radio-4">Pound</Radio>
    <Radio color="danger-o" icon={<i className="mdi mdi-check" />} name="radio-4">Rupee</Radio>
</>`;

const animationExample = `<>
    <Radio color="primary-o"
        shape="curve"
        animation="tada"
        icon={<i className="mdi mdi-check" />}
        name="radio-5">HTML</Radio>

    <Radio color="success-o"
        shape="curve"
        animation="rotate"
        icon={<i className="mdi mdi-check" />}
        name="radio-5">JavaScript</Radio>

    <Radio color="info-o"
        shape="curve"
        animation="pulse"
        icon={<i className="mdi mdi-check" />}
        name="radio-5">Python</Radio>

    <Radio color="warning-o"
        shape="curve"
        animation="jelly"
        icon={<i className="mdi mdi-check" />}
        name="radio-5">PHP</Radio>

    <Radio color="danger-o"
        shape="curve"
        animation="smooth"
        icon={<i className="mdi mdi-check" />}
        name="radio-5">Swift</Radio>
</>`;

const plainExample = `<>
    <Radio plain
        color="primary-o"
        animation="smooth"
        icon={<i className="mdi mdi-human" />}
        name="radio=6">Single</Radio>

    <Radio plain
        color="info-o"
        animation="smooth"
        icon={<i className="mdi mdi-human-male-female" />}
        name="radio=6">Married</Radio>

    <Radio plain
        color="success-o"
        animation="smooth"
        icon={<i className="mdi mdi-heart" />}
        name="radio=6">In a relationship</Radio>
</>`;

const switchExample = `<>
    <Switch type="radio" color="success" name="radio-7">Summer</Switch>
    <Switch type="radio" color="success" style="fill" name="radio-7">Winter</Switch>
    <Switch type="radio" color="success" style="slim" name="radio-7">Fall</Switch>
</>`;

function PrettyRadio() {
    return (
        <>
            <Title>Radio</Title>
            <div className="content">
                <p>Styling radio buttons are very similar to checkbox. All features mentioned above will work for radio buttons as well!</p>
                <LiveProvider code={basicExample} scope={scope}>
                    <CollapseContainer title="Basic" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <LiveProvider code={colorsExample} scope={scope}>
                    <CollapseContainer title="Colors" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <LiveProvider code={solidColorsAndIconsExample} scope={scope}>
                    <CollapseContainer title="Solid color and icons" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <LiveProvider code={outlineColorsExample} scope={scope}>
                    <CollapseContainer title="Outline colors" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <LiveProvider code={animationExample} scope={scope}>
                    <CollapseContainer title="Animations" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <LiveProvider code={plainExample} scope={scope}>
                    <CollapseContainer title="Plain" demo={<LivePreview />}>
                        <>
                            <LiveEditor />
                            <LiveError />
                        </>
                    </CollapseContainer>
                </LiveProvider>
                <LiveProvider code={switchExample} scope={scope}>
                    <CollapseContainer title="Switch" demo={<LivePreview />}>
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

export default PrettyRadio;

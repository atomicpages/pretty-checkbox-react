import * as React from 'react';

import {
    Checkbox,
    useCheckboxState,
    Radio,
    RadioGroup,
    useRadioState,
    Switch,
    useSwitchState,
} from 'pretty-checkbox-react';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const ReactLive = ({ children, className }) => {
    // console.log(Checkbox, useCheckboxState);

    const [expanded, toggleExpanded] = React.useReducer(state => !state, false);

    return (
        <div className="code-example">
            <LiveProvider
                code={children}
                scope={{
                    Checkbox,
                    useCheckboxState,
                    Radio,
                    useRadioState,
                    Switch,
                    useSwitchState,
                }}>
                <div className="code-example__preview">
                    <LivePreview />
                    <LiveError />
                </div>

                <button className="code-example__editor-toggle" onClick={toggleExpanded}>
                    {!expanded ? 'Show Code' : 'Hide Code'}
                </button>
                {expanded ? (
                    <div className="code-example__editor">
                        <LiveEditor tabSize={4} />
                    </div>
                ) : null}
            </LiveProvider>
        </div>
    );
};

export default ReactLive;

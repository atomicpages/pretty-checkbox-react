import React from 'react';

import { Checkbox, Radio, Switch } from 'pretty-checkbox-react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const ReactLive = ({ children, className }) => {
    const [expanded, toggleExpanded] = React.useReducer(state => !state, false);

    if (className !== 'language-plain') {
        return <code>{children}</code>;
    }

    return (
        <div className="code-example">
            <LiveProvider
                code={children[0]}
                scope={{
                    Checkbox,
                    Radio,
                    Switch,
                }}>
                <div className="code-example__preview">
                    <LivePreview />
                    <LiveError />
                </div>

                <button
                    className="code-example__editor-toggle"
                    onClick={toggleExpanded}>
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

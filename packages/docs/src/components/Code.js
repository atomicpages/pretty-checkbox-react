import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import ReactLive from './ReactLive';

export const Code = ({ children, className, live, ...props }) => {
    const language = className.replace(/language-/, '')

    if (live) {
        return <ReactLive>{children.trim()}</ReactLive>;
    } else {
        return (
            <Highlight {...defaultProps} code={children.trim()} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={{ ...style, padding: '20px' }}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        );
    }
};

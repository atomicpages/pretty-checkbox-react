import * as React from 'react';

type UseOpenInNewWindow = {
    container: HTMLElement;
    features?: string;
};

const headerStyles = document.styleSheets;

function copyStyles(styles: StyleSheetList, target: Document) {
    let style: CSSStyleSheet;

    for (let i = 0; i < styles.length; i++) {
        style = styles[i] as CSSStyleSheet;

        if (style.href) {
            const link = document.createElement('link');

            link.href = style.href;
            link.type = style.type;
            link.disabled = style.disabled;

            style.title && (link.title = style.title);
            style.media.mediaText && (link.media = style.media.mediaText);

            link.rel = 'stylesheet';

            target.head.appendChild(link);
        } else {
            const len = style.cssRules.length;
            const newStyle = document.createElement('style');

            for (let j = 0; j < len; j++) {
                newStyle.appendChild(document.createTextNode(style.cssRules[j].cssText));
            }

            target.head.appendChild(newStyle);
        }
    }
}

export const useOpenInNewWindow = ({
    container,
    features = 'width=600,height=400,scrollbars=true,noopener=true',
}: UseOpenInNewWindow) => {
    const open = React.useRef(false);
    const win = React.useRef<Window>(null);

    React.useEffect(() => {
        return () => {
            if (open.current) {
                win.current.close();
            }
        };
    }, [container]);

    return {
        open: React.useCallback(() => {
            if (!open.current) {
                win.current = window.open('', '', features);
                copyStyles(headerStyles, win.current.document);
                win.current.document.body.appendChild(container);

                win.current.document.addEventListener('keyup', e => {
                    if (e.keyCode === 27) {
                        win.current.close();
                    }
                });
            }
        }, []),
        close: React.useCallback(() => {
            win.current.close();
        }, []),
    };
};

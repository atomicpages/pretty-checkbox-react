// @flow

import * as React from 'react';

type Props = { children: React.Node };

export const Card = ({ children }: Props) => (
    <div className="card mb-3">
        <div className="card-body p-0">{children}</div>
    </div>
);

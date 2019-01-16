import React from 'react';

export const Card = ({ children }) => (
    <div className="card mb-3">
        <div className="card-body p-0">{children}</div>
    </div>
);
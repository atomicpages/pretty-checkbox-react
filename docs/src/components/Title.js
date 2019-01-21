// @flow

import * as React from 'react';

type Props = { children: React.Node };

export const Title = ({ children }: Props) => <h5 className="mb-3">{children}</h5>;

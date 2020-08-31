import * as React from 'react';
import { nanoid } from 'nanoid/non-secure';

const PREFIX = 'pcr_';
export const useUUID = () => React.useRef(PREFIX + nanoid(8)).current;

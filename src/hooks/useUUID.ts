import * as React from 'react';
import { nanoid } from 'nanoid';

const PREFIX = 'pcr_';
export const useUUID = () => React.useRef(PREFIX + nanoid(8)).current;

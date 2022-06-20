import { useRef } from 'react';
import { nanoid } from 'nanoid/non-secure';

const PREFIX = 'pcr_';
export const useUUID = () => useRef(PREFIX + nanoid(8)).current;

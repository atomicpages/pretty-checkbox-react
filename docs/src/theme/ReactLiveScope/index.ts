/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { mdiCheck } from '@mdi/js';

import * as PCR from 'pretty-checkbox-react';
import * as Scale from '../../components/Scale';

const noop = (e: any) => {
  if (e) {
    e.preventDefault();
  }

  return null;
};

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  noop,
  mdiCheck,
  ...React,
  ...Scale,
  ...PCR,
};

export default ReactLiveScope;

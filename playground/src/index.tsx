import './wdyr';

import React from 'react';
import ReactDOM from 'react-dom';

import { Basic } from './sections/basic';
import { Functional } from './sections/functional';
import { AllRadio } from './sections/radio';
import { AllSwitch } from './sections/switch';
import { Formik } from './sections/formik';
import { RHF } from './sections/rhf';
import { Indeterminate } from './sections/Indeterminate';

import 'pretty-checkbox/src/pretty-checkbox.scss';
// import '@mdi/font/css/materialdesignicons.css';

function App() {
    return (
        <main>
            <Basic />
            <Functional />
            <Indeterminate />
            <AllRadio />
            <AllSwitch />
            <Formik />
            <RHF />
        </main>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));

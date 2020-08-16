import './wdyr';
import 'react-hot-loader';
import { hot } from 'react-hot-loader/root';

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

function Main() {
    return (
        <React.StrictMode>
            <main>
                <Basic />
                <Functional />
                <Indeterminate />
                <AllRadio />
                <AllSwitch />
                <Formik />
                <RHF />
            </main>
        </React.StrictMode>
    );
}

const App = hot(Main);

ReactDOM.render(<App />, document.querySelector('#root'));

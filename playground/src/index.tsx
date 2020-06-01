import { hot } from 'react-hot-loader/root';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Basic } from './sections/basic';
import { Functional } from './sections/functional';
import { AllRadio } from './sections/radio';
import { AllSwitch } from './sections/switch';
import { Formik } from './sections/formik';
import { RHF } from './sections/rhf';

import 'pretty-checkbox';

function Main() {
    return (
        <React.StrictMode>
            <main>
                <Basic />
                <Functional />
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

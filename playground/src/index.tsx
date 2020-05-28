import { hot } from 'react-hot-loader/root';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Basic } from './sections/basic';
import { Functional } from './sections/functional';

import 'pretty-checkbox';
import { AllRadio } from './sections/radio';

function Main() {
    return (
        <main>
            <Basic />
            <Functional />
            <AllRadio />
        </main>
    );
}

const App = hot(Main);

ReactDOM.render(<App />, document.querySelector('#root'));

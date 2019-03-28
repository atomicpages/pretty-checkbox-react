import React from 'react';
import ReactDOM from 'react-dom';

import ListProps from './components/ListProps';
import Installation from './sections/Installation';
import BasicCheckbox from './sections/BasicCheckbox';
import SwitchPage from './sections/Switch';
import Colors from './sections/Colors';
import FontIcons from './sections/FontIcons';
import SVG from './sections/SVG';
import Image from './sections/Image';
import Animations from './sections/Animations';
import Plain from './sections/Plain';
import Indeterminate from './sections/Indeterminate';
import DisableLock from './sections/DisableLock';
import Size from './sections/Size';
import PrettyRadio from './sections/Radio';
import Customize from './sections/Customize';
import FAQ from './sections/FAQ';

import './styles/app.scss';

function App() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid mb-0 text-center">
                <div className="container">
                    <h1 className="brand">pretty checkbox react</h1>
                    <p>
                        A tiny react wrapper around pretty checkbox CSS library{' '}
                        <iframe src="https://ghbtns.com/github-btn.html?user=atomicpages&repo=pretty-checkbox-react&type=star&count=true"
                            frameBorder="0"
                            scrolling="0"
                            width="170px"
                            height="20px"
                            title="Github Stargazers"></iframe>
                    </p>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white borbot mb-3">
                <ul className="nav justify-content-center mx-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="#installation">
                            <i className="mdi mdi-folder-download"></i>
                            <span className="d-none d-sm-inline">Installation</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#list-props">
                            <i className="mdi mdi-cogs"></i>
                            <span className="d-none d-sm-inline">Props</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#basic-checkbox">
                            <i className="mdi mdi-checkbox-marked"></i>
                            <span className="d-none d-sm-inline">Checkboxes</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#radio">
                            <i className="mdi mdi-radiobox-marked"></i>
                            <span className="d-none d-sm-inline">Radio buttons</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#scss-settings">
                            <i className="mdi mdi-sass"></i>
                            <span className="d-none d-sm-inline">Configure</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#faq">
                            <i className="mdi mdi-help-circle"></i>
                            <span className="d-none d-sm-inline">FAQ</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <div className="col-md-8 mx-auto">
                    <section className="section" id="installation"><Installation /></section>
                </div>
                <div className="col-md-12 mx-auto">
                    <section className="section" id="list-props"><ListProps /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="basic-checkbox"><BasicCheckbox /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="switch"><SwitchPage /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="colors"><Colors /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="fonticons"><FontIcons /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="svg"><SVG /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="image"><Image /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="animations"><Animations /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="plain"><Plain /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="indeterminate"><Indeterminate /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="disable-lock"><DisableLock /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="size"><Size /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="radio"><PrettyRadio /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="scss-settings"><Customize /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="faq"><FAQ /></section>
                </div>
            </div>
            <div className="footer text-center">Made with ❤ by Dennis Thompson</div>
        </>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

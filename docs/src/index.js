import React from 'react';
import ReactDOM from 'react-dom';

import Installation from './sections/Installation';
import BasicCheckbox from './sections/BasicCheckbox';
import Switch from './sections/Switch';
import Colors from './sections/Colors';

import './styles/app.scss';

function App() {
    return (
        <>
            <div className="jumbotron jumbotron-fluid mb-0 text-center">
                <div className="container">
                    <h1 className="brand">pretty checkbox react</h1>
                    <p>A tiny react wrapper around pretty checkbox CSS library</p>
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
                        <a className="nav-link" href="#more">
                            <i className="mdi mdi-dots-horizontal"></i> 
                            <span className="d-none d-sm-inline">More</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="container">
                <div className="col-md-8 mx-auto">
                    <section className="section" id="installation"><Installation /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="basic-checkbox"><BasicCheckbox /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="switch"><Switch /></section>
                </div>
                <div className="col-md-8 mx-auto">
                    <section className="section" id="colors"><Colors /></section>
                </div>
            </div>
        </>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

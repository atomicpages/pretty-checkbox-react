import * as React from 'react';
import { useFormik } from 'formik';
import { Checkbox } from '../../../src';

import styles from './formik.module.scss';

const initialValues = {
    name: '',
    tac: false,
};

const onSubmit = (values: typeof initialValues) => {
    alert(JSON.stringify(values, null, 4));
};

const validate = (values: typeof initialValues) => {
    const errors: Record<string, string> = {};

    if (!values.tac) {
        errors.tac = 'You must agree to the terms and conditions';
    }

    return errors;
};

export const Formik = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate,
    });

    return (
        <>
            <h2>Formik Usage</h2>
            <p>
                PCR integrates with state-based managed form solutions like <code>formik</code> with
                little effort:
            </p>
            <form onSubmit={formik.handleSubmit} className={styles.form}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        name="name"
                        id="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        required
                    />
                </div>
                <div>
                    <Checkbox
                        name="tac"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.tac + ''}>
                        Do you agree to the terms and conditions?
                    </Checkbox>
                    {(formik.errors.tac && formik.touched.tac && (
                        <small className={styles.error}>
                            <i className="mdi mdi-close-circle" /> {formik.errors.tac}
                        </small>
                    )) ||
                        null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

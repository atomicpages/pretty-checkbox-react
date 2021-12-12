import * as React from 'react';
import { useForm } from 'react-hook-form';
import { Checkbox } from '../../../src';

import styles from './formik.module.scss';

type Inputs = {
  name: string;
  tac: boolean;
};

const onSubmit = (data: Inputs) => {
  alert(JSON.stringify(data, null, 4));
};

const required = { required: true };

export const RHF = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <>
      <h2>React Hook Form Usage</h2>
      <p>
        PCR integrates with uncontrolled forms too (e.g.{' '}
        <code>react-hook-form</code>).
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            type="text"
            {...register('name', { required: true })}
          />
        </div>
        <div>
          <Checkbox {...register('tac', { required: true })}>
            Do you agree to the terms and conditions?
          </Checkbox>
          {errors.tac && (
            <small className={styles.error}>
              <i className="mdi mdi-close-circle" />
              You must agree to the terms and conditions
            </small>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

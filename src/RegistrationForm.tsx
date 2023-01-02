import React from 'react'
import { useFormik } from 'formik'

export function RegistrationForm () {
  const validate = (values: any) => {
    const errors: any = {}
    if (!values.email) {
      errors.email = 'Required field'
    } else if (values.email.length < 10) {
      errors.email = 'Must be more, than 10 characters'
    }
    if (!values.password) {
      errors.password = 'Required field'
    } else if (values.password.length < 10) {
      errors.password = 'Must be more, than 10 characters'
    }
    if (!values.repassword) {
      errors.repassword = 'Required field'
    } else if (values.repassword !== values.password) {
      errors.repassword = 'Second password does not match'
    }
    return errors
  }

  const formik: any = useFormik({
    initialValues: {
      email: '',
      password: '',
      repassword: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (<div>
    <h1>Registration form</h1>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='email'>Email address</label>
      <input
        id='email'
        name='email'
        type='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}/>
      {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
      <label htmlFor='password'>Password</label>
      <input
        id='password'
        name='password'
        type='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}/>
      {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
      <label htmlFor='repassword'>Repeat password</label>
      <input
        id='repassword'
        name='repassword'
        type='password'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.repassword}/>
      {formik.touched.repassword && formik.errors.repassword ? <div className='error'>{formik.errors.repassword}</div> : null}
      <button type='submit'>Register</button>
    </form>
  </div>)
}
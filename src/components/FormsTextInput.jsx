import React from 'react'
import { Field, ErrorMessage } from 'formik'
import FormsErrorMessage from './FormsErrorMessage'
import error from '../assets/images/error.svg'
const FormsInput = ({ name, label, ...rest }) => {
    return (
        <>
            <label
                className="mb-2 text-xs tracking-wide text-[#13005A]"
                htmlFor={name}
            >
                {label}
            </label>
            <Field>
                {
                    ({ form }) => {
                        return (
                            <div className='relative'>
                                <input
                                    className={' relative outline-none block w-full appearance-none rounded-lg border-[#1C82AD] border py-2 px-4' + (form.touched[name] && form.errors[name] ? ' border-red-500' : '')}
                                    type="text"
                                    name={name}
                                    id={name}
                                    value={form.values[name] || ''}
                                    onChange={form.handleChange}
                                    onBlur={form.handleBlur}
                                    {...rest}
                                />
                                {form.touched[name] && form.errors[name] && <img src={error} alt="error" className="absolute w-4 h-4 top-3.5 right-4" />}
                            </div>
                        )
                    }
                }
            </Field>
            <ErrorMessage name={name} component={FormsErrorMessage} />
        </>
    )
}

export default FormsInput
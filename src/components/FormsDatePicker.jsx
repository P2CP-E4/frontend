import React from 'react'
import { Field, ErrorMessage } from 'formik'
import FormsErrorMessage from './FormsErrorMessage'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const FormsDatePicker = ({ label, name, ...rest }) => {
    return (
        <>
            <label
                className="mb-2 block text-xs tracking-wide text-[#13005A]"
                htmlFor={name}
            >
                {label}
            </label>
            <Field name={name}>
                {
                    ({ form, field }) => {
                        const { setFieldValue } = form;
                        const { value } = field;
                        return <DatePicker
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={val => setFieldValue(name, val)}
                            dateFormat="yyyy/MM/dd"
                            popperPlacement="right"
                            showYearDropdown
                            className={'outline-none block w-full appearance-none rounded-lg border-[#1C82AD] border py-2 px-4' + (form.touched[name] && form.errors[name] ? ' border-red-500' : '')}
                        />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={FormsErrorMessage} />
        </>
    )
}

export default FormsDatePicker;
import React from 'react'
import { Field, ErrorMessage } from 'formik';
import CreatableSelect from 'react-select/creatable';
import FormsErrorMessage from './FormsErrorMessage';

const FormsCreatableSelect = ({ name, label, options, placeholder, ...rest }) => {
    //TODO:  API request to get the options
    //TODO:  API request to add the new option
    return (
        <>
            <label
                className="mb-2 block text-xs tracking-wide text-[#13005A]"
                htmlFor={name}
            >
                {label}
            </label>
            <Field
                id={name}
                name={name}
            >
                {
                    ({ form }) => {
                        return (
                            <CreatableSelect
                                options={options}
                                value={(options ? options.find(option => option.value === form.values[name]) : '')}
                                onChange={selectedOption => form.setFieldValue(name, selectedOption.value)}
                                name={name}
                                placeholder={placeholder}
                                {...rest}
                                styles=
                                {
                                    {
                                        control: (styles, state) => {
                                            return {
                                                ...styles,
                                                backgroundColor: 'white',
                                                padding: '1.5px',
                                                color: '#000000',
                                                margin: '0px',
                                                border: form.touched[name] && form.errors[name] ? '1px solid #EB5757' : '1px solid #1C82AD',
                                                borderRadius: state.menuIsOpen ? '0.5rem 0.5rem  0rem 0rem' : '0.5rem',
                                                boxShadow: 'none',
                                                "&:hover": { border: "1px solid #1C82AD", },
                                            }
                                        },
                                        option: (styles) => {
                                            return {
                                                ...styles,
                                                color: '#898989',
                                                backgroundColor: 'white',
                                                "&:hover": { backgroundColor: "#C4D9E3", },
                                            }
                                        },
                                        menu: (provided) => {
                                            return {
                                                ...provided,
                                                margin: '0px',
                                                padding: '0px',
                                                height: 'fit-content',
                                                borderRadius: '0px 0px 5px 5px',
                                                border: '1px solid #1C82AD',
                                                boxShadow: 'none'
                                            }
                                        }
                                    }
                                }
                            />
                        )
                    }
                }
            </Field >
            <ErrorMessage component={FormsErrorMessage} name={name} />
        </>
    )
}

export default FormsCreatableSelect
import React from "react"
import { useField } from "formik"

const TextInput = ({ label, id, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <textarea
        type="text"
        {...field}
        {...props}
        className={
          meta.touched && meta.error
            ? "input-error min-h-[5rem]"
            : "min-h-[5rem]"
        }
      />
      {meta.touched && meta.error && (
        <div className="text-[#ff001a]">{meta.error}</div>
      )}
    </div>
  )
}

export default TextInput

//    <label
// htmlFor={props.id}
// className="text-Color-Blue ml-8 mb-3 max-w-[280px]"
// >
// {props.label}
// </label>
// <textarea
// type="text"
// required
// {...props}
// className="border-2 border-solid border-Color-Light-Blue w-80 min-h-[5rem] py-1 px-4 outline-0 rounded-lg text-Color-Blue bg-transparent"
// />

import React from "react"
import { useField } from "formik"

const RadioInput = ({ label, id, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="radio-input inline-block text-center w-40 align-middle mb-2 relative">
      <input
        type="radio"
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      <span className={meta.touched && meta.error ? "radio-error" : ""}></span>
      <label htmlFor={id} className="text-white cursor-pointer ml-2">
        {label}
      </label>
    </div>
  )
}

export default RadioInput

// <div className="radio-input inline-block text-center w-40 align-middle mb-2 relative">
//   <input
//     type="radio"
//     required
//     {...props}
//     className="opacity-0 absolute top-[10%] left-[35%] z-10 cursor-pointer"
//   />
//   <span></span>
//   <label htmlFor={props.id} className="text-Color-Blue cursor-pointer ml-2">
//     {props.label}
//   </label>
// </div>

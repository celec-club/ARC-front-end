import { useField } from "formik"

const Input = ({ label, id, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        {...field}
        {...props}
        // onChange={props.onChange}
        className={
          `${meta.touched && meta.error ? "input-error" : ""}` + props.className
        }
      />
      {meta.touched && meta.error && (
        <div className="text-[#ff001a]">{meta.error}</div>
      )}
    </div>
  )
}
export default Input

import { useField } from "formik"

const Select = ({ label, id, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        {...field}
        {...props}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && (
        <div className="text-[#ff001a]">{meta.error}</div>
      )}
    </div>
  )
}
export default Select

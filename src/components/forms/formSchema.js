import * as yup from "yup"

export const formSchema = yup.object().shape({
  // team_title: yup.string().required(),

  wilaya: yup
    .string()
    .oneOf(["Algiers", "Oran", "Constantine", "Ghardaïa"], "Invalid wilaya")
    .required("Required"),

  fullname: yup.string().required(),

  phone: yup.number().positive().integer().required(),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter you email"),

  is_student: yup.string().required().oneOf(["1", "0"]),

  need_hosting: yup.string().required().oneOf(["1", "0"]),

  skills: yup.string().required(),

  projects: yup.string().required(),

  motivation: yup.string().required(),

  tshirt: yup
    .string()
    .oneOf(["S", "M", "L", "XL", "XXL"], "Invalid T-shirt size")
    .required("Required"),

  linkedIn_github: yup.string().required(),

  password: yup.string().required(),

  // id_card: yup
  //   .mixed()
  //   .required("You need to provide a file")
  //   .test(
  //     "fileSize",
  //     "The image size mus be less than 10MB",
  //     (value) => value && value.size < 10_000_000
  //   ),
})

import React from "react"

import axios from "axios"
import { Form, Formik } from "formik"

import Container from "../UI/Container"
import Button from "../UI/Button"

import Input from "./formComponents/Input"
import Select from "./formComponents/Select"
import TextInput from "./formComponents/TextInput"
import RadioInput from "./formComponents/RadioInput"

import { formSchema } from "./formSchema"

const initialValues = {
  team_title: "",
  wilaya: "",
  fullname: "",
  email: "",
  password: "",
  phone: "",
  is_student: "",
  job: "",
  linkedIn_github: "",
  need_hosting: "",
  skills: "",
  projects: "",
  motivation: "",
  tshirt: "",
  id_card: "",
}

let errorMessage = ""

const MainForm = (props) => {
  const submitFormHandler = (values, { resetForm }) => {
    let errorMessage = ""

    function submitInscription(memberValues) {
      axios
        .post("http://api.celec-club.com/api/arc/registration", memberValues)
        .then(function (response) {
          console.log(response)
          resetForm({ values: "" })
        })
        .catch(function (error) {
          if (error.response.status === 422) {
            const data = error.response.data
            const errors = data.errors
            for (const [key, value] of Object.entries(errors)) {
              errorMessage += `${key}: ${value}`
              errorMessage += "\n"
            }
            alert(errorMessage)
          } else {
            // errorMessage = "Server error please try again"
            alert("Server error please try again")
          }
        })
    }
    submitInscription(values)
  }

  return (
    <Container className="my-14">
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={submitFormHandler}
      >
        {(props) => (
          <Form className="grid grid-cols-2 justify-center relative ph:grid-cols-1">
            <div className="justify-self-center">
              <Input
                id="team_title"
                label="Team Name"
                type="text"
                name="team_title"
              />
              <Select
                id="wilaya"
                label="Select the state where to compete"
                type="text"
                name="wilaya"
              >
                <option value="">Please select your region</option>
                <option value="Algiers">Algiers</option>
                <option value="Oran">Oran</option>
                <option value="Constantine">Constantine</option>
                <option value="Ghardaïa">Ghardaïa</option>
              </Select>
              <Input
                id="fullname"
                label="Full Name"
                type="text"
                name="fullname"
              />
              <Input id="email" label="Email" type="email" name="email" />
              <Input
                id="password"
                label="Password"
                type="password"
                name="password"
              />
              <Input
                id="phone"
                label="Phone number"
                type="number"
                name="phone"
                min="0"
              />
              <p className="text-white ml-8 mb-3">Are you a student</p>
              <div>
                <RadioInput
                  id="student_true"
                  label="Yes"
                  name="is_student"
                  value="yes"
                />
                <RadioInput
                  id="student_false"
                  label="No"
                  name="is_student"
                  value="no"
                />
              </div>
              <Input
                id="job"
                label="If no, please enter your function"
                type="text"
                name="job"
              />
              <Select
                id="tshirt"
                label="Select your T-shirt size"
                type="text"
                name="tshirt"
              >
                <option value="">Please select your size</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </Select>
            </div>
            <div className="justify-self-center">
              <Input
                id="linkedIn_github"
                label="Github or LinkedIn account link"
                type="text"
                name="linkedIn_github"
              />
              <Input
                id="id_card"
                label="Upload your ID card image"
                type="file"
                accept="image/*"
                name="id_card"
                value={undefined}
                onChange={(e) =>
                  props.setFieldValue("id_card", e.target.files[0])
                }
              />
              <p className="text-white ml-8 mb-3">
                Do you need a place to reside?
              </p>
              <div>
                <RadioInput
                  id="need_hosting-true"
                  label="Yes"
                  name="need_hosting"
                  value="yes"
                />
                <RadioInput
                  id="need_hosting-false"
                  label="No"
                  name="need_hosting"
                  value="no"
                />
              </div>
              <TextInput id="Skills" label="List your skills" name="skills" />
              <TextInput
                id="projects"
                label="List the projects you realized in the field of robotics, electronics or computer science"
                name="projects"
              />
              <TextInput
                id="motivation"
                label="Your motivation to attend this competition"
                name="motivation"
              />
              <Button
                type="submit"
                className="w-80 text-white bg-Color-Cyan py-3 rounded-lg mt-2"
                // disabled={props.disableBtn}
                // className={
                //   props.closed
                //     ? "w-80 text-white bg-Color-Cyan py-3 rounded-lg mt-2"
                //     : "w-80 text-white bg-Color-Cyan py-3 rounded-lg mt-2"
                // }
              >
                Submit
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default MainForm

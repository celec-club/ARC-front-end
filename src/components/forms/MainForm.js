import React from "react"

import { Form, Formik } from "formik"

import Container from "../UI/Container"
import Button from "../UI/Button"

import Input from "./formComponents/Input"
import Select from "./formComponents/Select"
import TextInput from "./formComponents/TextInput"
import RadioInput from "./formComponents/RadioInput"

const initialValues = {
  team_name: "",
  region: "",
  full_name: "",
  email: "",
  password: "",
  phone: "",
  is_student: "",
  function: "",
  portfolio: "",
  id_image: "",
  need_auberge: "",
  skills: "",
  projects: "",
  motivation: "",
}

const MainForm = (props) => {
  return (
    <Container className="my-14">
      <Formik
        initialValues={initialValues}
        validationSchema={"trainingSchema"}
        onSubmit={"submitFormHandler"}
      >
        {({ isSubmitting }) => (
          <Form className="grid grid-cols-2 justify-center relative ph:grid-cols-1">
            <div className="justify-self-center">
              <Input
                id="team_name"
                label="Team Name"
                type="text"
                name="team_name"
              />
              <Select
                id="region"
                label="Select the state where to compete"
                type="text"
                name="region"
              >
                <option value="">Please select your region</option>
                <option value="Algiers">Algiers</option>
                <option value="Oran">Oran</option>
                <option value="Constantine">Constantine</option>
                <option value="Ghardaïa">Ghardaïa</option>
              </Select>
              <Input
                id="full_name"
                label="Full Name"
                type="text"
                name="full_name"
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
                id="function"
                label="If no, please enter your function"
                type="text"
                name="function"
              />
            </div>
            <div className="justify-self-center">
              <Input
                id="portfolio"
                label="Github or LinkedIn account link"
                type="text"
                name="portfolio"
              />
              <Input
                id="id_image"
                label="Upload your ID card image"
                type="file"
                accept="image/*"
                name="id_image"
                required
                // onChange={handleImageInput}
              />
              <p className="text-white ml-8 mb-3">
                Do you need a place to reside?
              </p>
              <div>
                <RadioInput
                  id="need_auberge-true"
                  label="Yes"
                  name="need_auberge"
                  value="yes"
                />
                <RadioInput
                  id="need_auberge-false"
                  label="No"
                  name="need_auberge"
                  value="no"
                />
              </div>
              <TextInput id="Skills" label="List your skills" name="Skills" />
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
                // className="w-80 text-white bg-Color-Blue py-3 rounded-lg mt-2"
                disabled={props.disableBtn}
                className={
                  props.closed
                    ? "w-80 text-white bg-Color-Cyan py-3 rounded-lg mt-2"
                    : "w-80 text-white bg-Color-Cyan py-3 rounded-lg mt-2"
                }
              >
                {props.closed ? "Registration are closed" : "Submit"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default MainForm

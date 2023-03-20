import React, { useState, useEffect } from "react"
// import { Navigate } from "react-router-dom"
import axios from "axios"
import { Form, Formik } from "formik"
import { useParams } from "react-router-dom"

import Container from "../UI/Container"
import Button from "../UI/Button"

import Input from "./formComponents/Input"
import Select from "./formComponents/Select"
import TextInput from "./formComponents/TextInput"
import RadioInput from "./formComponents/RadioInput"
import FormPortal from "./FormProtal/FormPortal"

import { formSchema } from "./formSchema"

const initialValues = {
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
  // id_card: "",
}

const formData = new FormData()

let errorMessage = ""

const MainForm = (props) => {
  const { registerId } = useParams()

  const [isNewTeam, setIsNewTeam] = useState(false)
  const [teamRegistrationId, setTeamRegistrationId] = useState("")
  const [teamData, setTeamData] = useState({})
  const [apiInscriptionUrl, setApiInscriptionUrl] = useState("")
  const [showPortal, setShowPortal] = useState(false)
  const [formIsNotValid, setFormIsNotValid] = useState(false)
  const [successRequest, setSuccessRequest] = useState(false)

  const closePortalHandler = () => {
    setShowPortal(false)
    setFormIsNotValid(false)
    setSuccessRequest(false)
  }

  useEffect(() => {
    if (registerId !== undefined) {
      axios
        .get(`http://api.celec-club.com/api/arc/team/check/${registerId}`)
        .then((response) => {
          setIsNewTeam(false)
          setTeamData(response.data)
          setApiInscriptionUrl(
            `http://api.celec-club.com/api/arc/registration?team_code=${registerId}`
          )
          console.log(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      setIsNewTeam(true)
      setApiInscriptionUrl("http://api.celec-club.com/api/arc/registration")
    }
  }, [registerId])

  const handleImageInput = (event) => {
    formData.append(
      "id_card",
      event.target.files[0],
      event.target.files[0].name
    )
  }

  const submitFormHandler = (values, { resetForm }) => {
    errorMessage = ""

    function submitInscription(memberValues) {
      if (isNewTeam) {
        formData.append("team_title", memberValues.team_title)
      }
      formData.append("wilaya", memberValues.wilaya)
      formData.append("fullname", memberValues.fullname)
      formData.append("phone", memberValues.phone)
      formData.append("email", memberValues.email)
      formData.append("is_student", memberValues.is_student)
      formData.append("need_hosting", memberValues.need_hosting)
      formData.append("skills", memberValues.skills)
      formData.append("projects", memberValues.projects)
      formData.append("motivation", memberValues.motivation)
      formData.append("job", memberValues.job)
      formData.append("tshirt", memberValues.tshirt)
      formData.append("linkedIn_github", memberValues.linkedIn_github)
      formData.append("password", memberValues.password)

      for (const value of formData.values()) {
        console.log(value)
      }

      axios
        .post(apiInscriptionUrl, formData)
        .then(function (response) {
          setSuccessRequest(true)
          setShowPortal(true)
          resetForm({ values: "" })
          setTeamRegistrationId(response.data)
        })
        .catch(function (error) {
          if (error.response.status === 422) {
            const data = error.response.data
            const errors = data.errors
            for (const [key, value] of Object.entries(errors)) {
              errorMessage += `${key}: ${value}`
              errorMessage += "\n"
            }
            // alert(errorMessage)
            setFormIsNotValid(true)
            setShowPortal(true)
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
      {isNewTeam && (
        <FormPortal
          isOpened={showPortal}
          formValidity={formIsNotValid}
          errorMessage={errorMessage}
          success={successRequest}
          teamRegistrationLink={`http://arc.celec-club.com/register/${teamRegistrationId.team_code}`}
          closePortal={closePortalHandler}
        />
      )}
      {isNewTeam && (
        <p className="text-white text-xl text-center py-5">
          Please note that when submitting the form, a link will show up and you
          must share this link with your team to register through it
        </p>
      )}
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
                disabled={!isNewTeam}
                required={isNewTeam}
                name={isNewTeam ? "team_title" : "team_code"}
                placeholder={isNewTeam ? "" : teamData.title}
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
                  value="1"
                />
                <RadioInput
                  id="student_false"
                  label="No"
                  name="is_student"
                  value="0"
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
                required
                accept="image/png, image/jpeg, image/jpg"
                name="id_card"
                onChange={handleImageInput}
                // onChange={(event) => {
                // let reader = new FileReader()
                // let file = event.currentTarget.files[0]

                // props.setFieldValue("id_card", event.currentTarget.files[0])

                // reader.readAsDataURL(file)
                // if (file) {
                //   reader.onload = (e) => {
                //     props.setFieldValue("id_card", e.target.result)
                //     console.log(e.target.result)
                //   }
                // }
                // }}
              />
              <p className="text-white ml-8 mb-3">
                Do you need a place to reside?
              </p>
              <div>
                <RadioInput
                  id="need_hosting-true"
                  label="Yes"
                  name="need_hosting"
                  value="1"
                />
                <RadioInput
                  id="need_hosting-false"
                  label="No"
                  name="need_hosting"
                  value="0"
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

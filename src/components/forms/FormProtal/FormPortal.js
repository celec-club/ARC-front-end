import React from "react"
import ReactDOM from "react-dom"

import Button from "../../UI/Button"

const FormPortal = (props) => {
  if (!props.isOpened) {
    return
  }
  return ReactDOM.createPortal(
    <div className="portal">
      <div className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-[rgba(0,0,0,.7)]"></div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] ph:w-[300px] z-20 bg-white p-5 rounded-lg ">
        {props.formValidity && (
          <div className="error-pup-up relative">
            <h3>Please update those information :</h3>
            <p>{props.errorMessage}</p>
          </div>
        )}

        {props.success && (
          <div className="success-pup-up">
            <h3>
              Registration went successfully.
              <br />
              Please share this link with your Team, they must register through
              it
            </h3>
            <p className="py-4">{props.teamRegistrationLink}</p>
          </div>
        )}
        <Button onClick={props.closePortal}>Close</Button>
      </div>
    </div>,
    document.getElementById("form-portal")
  )
}

export default FormPortal

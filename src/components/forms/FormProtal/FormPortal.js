import React, { useState } from "react"
import ReactDOM from "react-dom"

import Button from "../../UI/Button"

import { CopyToClipboard } from "react-copy-to-clipboard"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const FormPortal = (props) => {
  const [copied, setCopied] = useState(false)

  if (!props.isOpened) {
    return
  }

  if (copied) {
    const copyTextTimeout = setTimeout(() => {
      setCopied(false)
      clearTimeout(copyTextTimeout)
    }, 2000)
  }
  return ReactDOM.createPortal(
    <div className="portal">
      <div className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-[rgba(0,0,0,.7)]"></div>
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[500px] ph:w-[300px] z-20 bg-white p-5 rounded-lg ">
        {!props.success && (
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
              Please share this link with your Team.
            </h3>
            <div>
              <input
                type="text"
                className="border-[1px] border-Color-Dark-Blue border-solid rounded w-full h-10 p-3"
                disabled
                value={props.teamRegistrationLink}
              />
            </div>
          </div>
        )}
        <div className="flex justify-between mt-4">
          {props.success && (
            <div className="relative">
              <CopyToClipboard
                text={props.teamRegistrationLink}
                onCopy={() => setCopied(true)}
              >
                <button
                  className="active:scale-[0.98]"
                  onClick={() => setCopied(true)}
                >
                  Copy link{" "}
                </button>
              </CopyToClipboard>
              {copied && (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-Color-Cyan text-2xl ml-4 absolute top-1/2 translate-y-[-50%]"
                />
              )}
            </div>
          )}
          <Button
            className="bg-Color-Cyan text-white px-4 py-2 rounded-lg"
            onClick={props.closePortal}
          >
            Close
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("form-portal")
  )
}

export default FormPortal

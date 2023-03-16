import React from "react"

import Input from "./formComponents/Input"
import Select from "./formComponents/Select"

const TeamInformation = () => {
  return (
    <div>
      <h2>Team Information</h2>
      <Input id="team_name" label="Team Name" type="text" name="team_name" />
      <Select
        id="study_level"
        label="Study Level"
        type="text"
        name="study_level"
      >
        <option value="">Please select your study level</option>
        <option value="L1">L1</option>
        <option value="L2">L2</option>
        <option value="L3">L3</option>
        <option value="M1">M1</option>
        <option value="M2">M2</option>
        <option value="phd">Doctorate</option>
      </Select>
      <Input
        id="team_password"
        label="Full Name"
        type="password"
        name="team_password"
      />
    </div>
  )
}

export default TeamInformation

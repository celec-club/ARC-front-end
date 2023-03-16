import React, { useState, useEffect } from "react"

import Container from "../UI/Container"

import ARCLogo from "../../assets/ARC_logo.png"

const Landing = () => {
  const [timerDays, setTimerDays] = useState()
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()

  let interval

  const startTimer = () => {
    const countDownDate = new Date("Apr 29,2023 ").getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()

      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
      const seconds = Math.floor((distance % (60 * 1000)) / 1000)

      if (distance < 0) {
        // Stop Timer
        setTimerDays(0)
        setTimerHours(0)
        setTimerMinutes(0)
        setTimerSeconds(0)
        clearInterval(interval.current)
      } else {
        // Update Timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
  })

  return (
    <Container
      id="home"
      className="h-[calc(100vh-7rem)] flex flex-col justify-evenly items-center"
    >
      <div className="flex justify-center items-center gap-y-10 gap-x-16 tab:flex-col tab:text-center">
        <div className="max-w-lg">
          <h1 className="text-white text-3xl font-bold uppercase max-w-md">
            Welcome to the
            <span className="text-Color-Cyan"> Algerian Robot Cup </span>
            Competition
          </h1>
          <p className="text-gray-200">
            Le club CELEC de l'université des sciences et technogies Houari
            Boumediene, organise une compétition nationale exceptionnel de
            robotique sous le nom "Algerian Robot Cup".
          </p>
        </div>
        <div>
          <img src={ARCLogo} alt="ARC_Logo" className="w-80 ph:w-52" />
        </div>
      </div>
      <div className="countdown_container flex justify-center items-center gap-5 ph:max-w-xs ph:flex-wrap">
        <div>
          {timerDays} <br /> <small>Days</small>
        </div>
        <div>
          {timerHours} <br /> <small>Hours</small>
        </div>
        <div>
          {timerMinutes} <br /> <small>Minutes</small>
        </div>
        <div>
          {timerSeconds} <br /> <small>Seconds</small>
        </div>
      </div>
    </Container>
  )
}

export default Landing

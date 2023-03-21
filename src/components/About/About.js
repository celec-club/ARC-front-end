import React from "react"

import Container from "../UI/Container"

import Map from "../../assets/wilaya.png"
import finaleImg from "../../assets/ARC_logo.png"

const About = () => {
  return (
    <Container>
      <section id="goals" className="text-center">
        <h2 className="text-3xl text-Color-Cyan text-center font-bold uppercase py-10 mb-5">
          Goals of the competition
        </h2>
        <p className="text-white text-center max-w-4xl mx-auto">
          Today, robotics affects a wide range of economic activities from
          automotive and electronic industries to food, recycling, logistics,
          etc. The main objective of the involvement of robots is to perform
          tasks better than humans, especially when it comes to repetitive and
          detailed tasks, in which case the involvement of artificial
          intelligence technology is necessary. The deployment of AI in
          manufacturing and service operations will ensure accuracy and
          precision of the process and avoid delays with faster changeover of
          operations when necessary. Using AI in the factory can help increase
          productivity and quality while ensuring a strong safety framework.
        </p>
      </section>
      <section id="about">
        <h2 className="text-3xl text-Color-Cyan text-center font-bold uppercase py-10 mb-5">
          About the competition
        </h2>
        <div className="flex justify-center items-center gap-10 ph:flex-col">
          <div className="max-w-lg">
            <h3 className="text-xl text-Color-Cyan font-bold uppercase py-5 ">
              Qualifications
            </h3>
            <p className="text-white text-justify max-w-4xl mx-auto">
              The competition consists of two main phases: <br /> The first
              phase is the qualification for the final, and will take place on
              April, 29, 2023 in the 4 following wilayas : Algiers, Ghardaia,
              Oran and Batna. It involves a multitude of mini-challenges under
              timers, involving skills in robotics but also basics in Artificial
              Intelligence that participants must have to make an effective
              selection of finalists.
            </p>
          </div>
          <div>
            <img src={Map} alt="Competition_Map" className="w-[500px]" />
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center gap-10 ph:flex-col">
        <div>
          <img src={finaleImg} alt="Competition_Map" className="w-96" />
        </div>
        <div className="max-w-lg">
          <h3 className="text-xl text-Color-Cyan font-bold uppercase py-5 ">
            The final
          </h3>
          <p className="text-white text-justify max-w-4xl mx-auto">
            The final will take place in the wilaya of Algiers, on July 22, 2023
            where, the qualifiers of the first round will fight to win the 1st
            title of "Algerian Robot Cup 2023" whose theme is the development of
            an industrial plant and that, by integrating new technologies such
            as artificial intelligence, wireless communication protocols, new
            mechanisms...etc.
          </p>
        </div>
      </section>
      <h2 className="text-3xl text-Color-Cyan text-center font-bold uppercase py-10 mb-5">
        Feel the power of robot <span className="text-white">With arc</span>
      </h2>
    </Container>
  )
}

export default About

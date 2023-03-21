import React from "react"

import Container from "../UI/Container"

import Map from "../../assets/wilaya.png"

const About = () => {
  return (
    <Container>
      <section id="goals" className="text-center">
        <h2 className="text-3xl text-Color-Cyan text-center font-bold uppercase py-10 mb-5">
          Goals of the competition
        </h2>
        <p className="text-white text-center max-w-4xl mx-auto">
          Aujourd'hui, la robotique touche un large secteur d'activités
          économiques allant des industries automobile et électronique à
          l'alimentation, le recyclage, la logistique, etc. L’objectif principal
          de l’implication des robots est d’effectuer des tâches mieux que les
          humains, en particulier lorsqu'il s'agit des tâches répétitives et
          détaillées, dans ce cas-là, une implication de la technologie de
          l’intelligence artificielle est nécessaire. Le déploiement de l'IA
          dans les opérations de fabrication et de services garantira
          l'exactitude et la précision du processus et évitera les retards avec
          un changement plus rapide des opérations si nécessaire. L'utilisation
          de l'IA dans l'usine peut aider à augmenter la productivité et la
          qualité tout en garantissant un cadre de sécurité solide.
        </p>
      </section>
      <section id="about" className="">
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
              29 April 2023 in the 4 following wilayas : Algiers, Ghardaia, Oran
              and Batna. It involves a multitude of mini-challenges under
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
      <h2 className="text-3xl text-Color-Cyan text-center font-bold uppercase py-10 mb-5">
        Feel the power of robot <span className="text-white">With arc</span>
      </h2>
    </Container>
  )
}

export default About

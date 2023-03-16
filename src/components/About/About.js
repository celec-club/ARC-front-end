import React from "react"

import Container from "../UI/Container"

import Map from "../../assets/Alger.png"

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
              La compétition est composée de deux phases principales : <br /> La
              première phase est les qualifications pour la finale, et elle aura
              lieu le 27 mars 2022 entre les 5 wilayas suivantes : Alger,
              Biskra, Skikda, Sidi Bel Abbes, Ghardaia. Il s’agit d’une
              multitude de mini challenges sous chronomètres impliquant des
              compétences en robotique mais aussi des bases en Intelligence
              Artificielle que les participants devront avoir pour pouvoir
              procéder une sélection effective des finalistes.
            </p>
          </div>
          <div>
            <img src={Map} alt="Competition_Map" className="w-96" />
          </div>
        </div>
      </section>
    </Container>
  )
}

export default About

import { useRef } from "react"
import Container from "../../components/UI/Container"

import { NavLink, useLocation } from "react-router-dom"
import { NavHashLink } from "react-router-hash-link"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"

import ARCLogo from "../../assets/ARC_logo.png"

const NavBarHashLink = (props) => {
  let location = useLocation()

  return (
    <NavHashLink
      to={props.to}
      className={
        `${location.pathname}${location.hash}` === props.to
          ? "text-Color-Cyan before:left-0"
          : ""
      }
    >
      {props.children}
    </NavHashLink>
  )
}

const Header = () => {
  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <header className="h-28 ph:h-20 sticky top-0 bg-Color-Dark-Blue z-10">
      <Container className="flex justify-between items-center tab:flex-col">
        <div className="flex justify-between items-center w-[100%] pt-3">
          <NavLink to="/">
            <img src={ARCLogo} alt="ARC Logo" className="h-24 tab:h-16" />
          </NavLink>
          <FontAwesomeIcon
            icon={faBars}
            className="text-white text-2xl hidden tab:block cursor-pointer"
            onClick={showNavbar}
          />
        </div>

        <nav ref={navRef} className="z-10">
          <ul
            className="flex tab:flex-col tab:text-center"
            onClick={showNavbar}
          >
            <li>
              <NavBarHashLink to="/#home">Home</NavBarHashLink>
            </li>
            <li>
              <NavBarHashLink to="/#goals">Goals</NavBarHashLink>
            </li>
            <li>
              <NavBarHashLink to="/#about">About</NavBarHashLink>
            </li>
            <li>
              <NavBarHashLink to="/#partners">Partners</NavBarHashLink>
            </li>
            <li>
              <NavBarHashLink to="/#work-book">WorkBook</NavBarHashLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-Color-Cyan before:left-0" : undefined
                }
              >
                Register
              </NavLink>
            </li>
          </ul>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-white text-3xl hidden tab:block absolute top-8 right-12 cursor-pointer"
            onClick={showNavbar}
          />
        </nav>
      </Container>
    </header>
  )
}

export default Header

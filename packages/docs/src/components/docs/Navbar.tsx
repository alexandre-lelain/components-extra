import React from 'react'
import styled from 'styled-components'

import { Navbar } from 'components-extra'

export const BrandIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

export const FlagIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

export const AmericaFlag = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xlink="http://www.w3.org/1999/xlink"
    width="24"
    height="24"
    viewBox="0 0 7410 3900"
  >
    <rect width="7410" height="3900" fill="#b22234" />
    <path
      d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0"
      stroke="#fff"
      strokeWidth="300"
    />
    <rect width="2964" height="2100" fill="#3c3b6e" />
    <g fill="#fff">
      <g id="s18">
        <g id="s9">
          <g id="s5">
            <g id="s4">
              <path
                id="s"
                d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"
              />
              <use href="#s" y="420" />
              <use href="#s" y="840" />
              <use href="#s" y="1260" />
            </g>
            <use href="#s" y="1680" />
          </g>
          <use href="#s4" x="247" y="210" />
        </g>
        <use href="#s9" x="494" />
      </g>
      <use href="#s18" x="988" />
      <use href="#s9" x="1976" />
      <use href="#s5" x="2470" />
    </g>
  </svg>
)

export const ExtendedNavbar = styled(Navbar)`
  background-color: #3377ff;
  border-radius: 3px;
  * {
    color: lightblue;
  }
`

export const BrandExtended = styled(Navbar.Brand)`
  background-color: #3377ff;
  width: max-content;
  * {
    color: lightblue;
    font-size: 36px;
  }
`

const LanguageExtendedStyled = styled(Navbar.Language)`
  background-color: #3377ff;
  padding: 16px;
  box-shadow: 2px 2px 2px 2px black;
  &:hover {
    background-color: red;
  }
  * {
    color: dark;
  }
`

export const LanguageExtended = () => {
  const [selectedLanguage, setLang] = React.useState('English')
  return (
    <LanguageExtendedStyled selectedLanguage={selectedLanguage}>
      <Navbar.LanguageItem label="english" onClick={() => setLang('English')}>
        English
      </Navbar.LanguageItem>
      <Navbar.LanguageItem label="french" onClick={() => setLang('Français')}>
        Français
      </Navbar.LanguageItem>
    </LanguageExtendedStyled>
  )
}

export const LanguageItemExtended = styled(Navbar.LanguageItem)`
  background-color: #3377ff;
  width: max-content;
  padding: 18px;
  color: white;
  &:hover {
    background-color: black;
  }
`

export const MenuExtended = styled(Navbar.Menu)`
  background-color: #3377ff;
  padding: 5px;
  ${Navbar.MenuItem} {
    margin: 14px;
    font-size: 20px;
  }
`

export const MenuItemExtended = styled(Navbar.MenuItem)`
  background-color: #3377ff;
  width: max-content;
  padding: 8px;
  &:hover {
    background-color: red;
  }
`

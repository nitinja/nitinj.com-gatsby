import React, { useCallback } from "react"
import { useState } from "react"
import { useEffect } from "react";
import styles from './theme-switcher.module.scss'
// import moon from '/assets/icons/moon.svg';
// import sun from '/assets/icons/sun.svg';
import {RiMoonLine} from 'react-icons/ri'
import {RiSunLine} from 'react-icons/ri'


export function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"
  })

  useEffect(() => {
    document.body.classList.add(theme)
  }, [])

  const toggleSwitch = ()=> {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme);
    console.log("change theme to ", newTheme)
    
    //set theme as body class
    document.body.classList.replace(theme, newTheme)

    //persiste theme setting
    localStorage.setItem("theme", newTheme)

  }
  return (
    <div className={`${styles.switcherBorder} ${styles.themeSwitcher} ${styles.themeSwitcherLightTheme}`} onClick={toggleSwitch}>
      <div className={`${styles.themeSwitcher} ${styles.themeSwitcherDarkTheme}`} style={{opacity: theme === 'light' ? 0 : 1}}></div>
      <RiSunLine />
      <RiMoonLine />
      <div className={`${styles.switch} ${theme === 'light' ? styles.switchLightTheme : styles.switchDarkTheme}`} onClick={toggleSwitch}></div>
    </div>
  )
}

import React, { useCallback } from "react"
import { useState } from "react"
import styles from "./theme-switcher.module.scss"
import { RiMoonLine } from "react-icons/ri"
import { RiSunLine } from "react-icons/ri"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return  typeof window !== 'undefined' ? localStorage.getItem("theme") || "light" : "light"
  })

  //TODO: useEffect for local storage and css class updates
  const toggleSwitch = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    console.log("changed theme to ", newTheme)
    
    /* set theme as body class */
    document.body.classList.replace(theme, newTheme)

    /* persiste theme setting */
    localStorage.setItem("theme", newTheme)
    
    /* Set inverted Theme */
    const invertedTheme = newTheme === "light" ? "dark" : "light"
    localStorage.setItem("invertedTheme", invertedTheme)
  }, [theme])
  
  const iconsColor = theme === 'light' ? '#000' : '#fff';
  return (
    <div
      className={`${styles.switcherBorder} ${styles.themeSwitcher} ${styles.themeSwitcherLightTheme}`}
      onClick={toggleSwitch}
    >
      <RiSunLine color={iconsColor} />
      <RiMoonLine color={iconsColor}/>
      <div
        className={`${styles.themeSwitcher} ${styles.themeSwitcherDarkTheme}`}
        style={{ opacity: theme === "light" ? 0 : 1 }}
      ></div>
      <div
        className={`${styles.switch} ${
          theme === "light" ? styles.switchLightTheme : styles.switchDarkTheme
        }`}
        onClick={toggleSwitch}
      ></div>
    </div>
  )
}

import React, { useCallback } from "react"
import { useState } from "react"
import styles from "./theme-switcher.module.scss"
import { RiMoonLine } from "react-icons/ri"
import { RiSunLine } from "react-icons/ri"

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
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

  const handleKeyPress = event => {
    debugger
    console.log("in keypress hand;le")

    if (event.key === "enter") {
      toggleSwitch()
    }
  }

  // const iconsColor = theme === "light" ? "#fff" : "#000"
  return (
    // <button
    //   className={`${styles.switcherBorder} ${styles.themeSwitcher}`}
    //   onClick={toggleSwitch}
    //   onKeyPress={handleKeyPress}
    // >
    //   <RiSunLine color={iconsColor} />
    //   <RiMoonLine color={iconsColor}/>
    //   <div
    //     className={`${styles.switch} ${
    //       theme === "light" ? styles.switchLightTheme : styles.switchDarkTheme
    //     }`}

    //   ></div>
    // </button>
    <div className={styles.switch}>
      <input id="theme-toggle" checked={theme === "dark"} onChange={toggleSwitch} type="checkbox" />
      <label htmlFor="theme-toggle">
        <RiSunLine className={styles.sunIcon} color={'#FFFFFF'} />
        <RiMoonLine className={styles.moonIcon} color={'#FFFFFF'} />
      </label>
    </div>
  )
}

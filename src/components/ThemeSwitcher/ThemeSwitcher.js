import React, { useCallback } from "react"
import { useState } from "react"
import styles from "./ThemeSwitcher.module.scss"
import { RiMoonLine } from "react-icons/ri"
import { RiSunLine } from "react-icons/ri"

export function ThemeSwitcher() {
  // const [themeClass] = useLocalStorage("theme")
  // const [mobileMenuThemeClass] = useLocalStorage("invertedTheme")
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
    if(document){
      document.body.classList.replace(theme, newTheme);
    }

    /* persiste theme setting */
    localStorage.setItem("theme", newTheme)
  }, [theme])

  // const handleKeyPress = event => {
  //   debugger
  //   console.log("in keypress hand;le")

  //   if (event.key === "enter") {
  //     toggleSwitch()
  //   }
  // }

  // const iconsColor = theme === "light" ? "#fff" : "#000"
  return (
    <div
      tabIndex="0"
      role="button"
      aria-pressed={theme === "dark"}
      className={styles.switch}
    >
      <input
        id="theme-toggle"
        checked={theme === "dark"}
        onChange={toggleSwitch}
        type="checkbox"
      />
      <label htmlFor="theme-toggle">
        <RiSunLine className={styles.sunIcon} color={"#FFFFFF"} />
        <RiMoonLine className={styles.moonIcon} color={"#FFFFFF"} />
      </label>
    </div>
  )
}

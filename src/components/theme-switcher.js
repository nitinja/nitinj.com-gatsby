import React, { useCallback } from "react"
import { useState } from "react"
import { useEffect } from "react";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light"
  })

  useEffect(() => {
    document.body.classList.add(theme)
  }, [])

  const changeTheme = useCallback(function() {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme);
    console.log("change theme to ", newTheme)

    //set theme as body class
    document.body.classList.replace(theme, newTheme)

    //persiste theme setting
    localStorage.setItem("theme", newTheme)
  })
  return (
    <div>
      <input type="checkbox" onChange={changeTheme} /> Change Theme
    </div>
  )
}

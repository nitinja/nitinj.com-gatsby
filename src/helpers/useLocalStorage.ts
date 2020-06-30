import { useState, useEffect } from "react"

/* Reusable hook to get/set from local storage */
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const data = JSON.parse(localStorage.getItem(key) || "[]")
      return data
    } catch (error) {
      console.error(`Error accessing ${key} from local storage.`)
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error storing ${key} to local storage.`)
    }
  }, [key, value])

  if (!localStorage) {
    throw new Error("localstorage not available.")
  }

  function setStorageValue(value): void {
    setValue(value)
  }

  return [value, setStorageValue]
}

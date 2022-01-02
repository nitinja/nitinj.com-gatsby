/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

require("prismjs/themes/prism.css")

exports.onClientEntry = function() {
  //One-time, independent code. Set theme if not present in local storage and also in body class
  if (typeof window !== "undefined") {
    const currentTheme = localStorage.getItem("theme")
    const initialTheme = currentTheme || "light"
    if (!currentTheme) {
      localStorage.setItem("theme", initialTheme)
    }
    document.body.classList.add(initialTheme)
  }
}

/* Coverts long date to fiendly date */

const intl = new Intl.DateTimeFormat(undefined, { dateStyle: "long" })

/* Formats date using intl API */
export function convertDateToRedableFormat(isoDate) {
  if (!isoDate) {
    throw new Error("No date provided")
  }
  return intl.format(new Date(isoDate))
}

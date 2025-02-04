type Classname = string | undefined | null | boolean

export const makeClassname = (...classnames: Classname[]): string => {
  return classnames.filter((item) => typeof item === 'string').join(' ')
}

export const getInitialFromName = (name) => {
  console.log(name)
  const nameArray = name.split(' ')
  const firstNameInitial = nameArray[0][0]
  const lastNameInitial = nameArray.length > 1 ? nameArray[nameArray.length - 1][0] : ''
  return `${firstNameInitial}${lastNameInitial}`
}

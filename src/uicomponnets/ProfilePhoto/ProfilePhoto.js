import { Avatar } from '@material-ui/core'
import React, { useMemo } from 'react'
import { getInitialFromName } from '../../utils/name'
import Text from '../Text/Text'

const ProfilePhoto = ({ name }) => {
  const initials = useMemo(() => getInitialFromName(name), [name])

  return (
    <Avatar component={Text} color="textPrimary" fontSize={18}>
      {initials}
    </Avatar>
  )
}

export default ProfilePhoto

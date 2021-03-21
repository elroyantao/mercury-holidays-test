import { Box } from '@material-ui/core'
import React from 'react'
import Text from '../../uicomponnets/Text/Text'

const PostAddress = ({ address }) => {
  const { street, suite, city, zipcode } = address

  return (
    <Box textAlign="right">
      <Text component="p" variant="caption">
        {street}
      </Text>
      <Text component="p" variant="caption">
        {suite}
      </Text>
      <Text component="p" variant="caption">
        {city}
      </Text>
      <Text component="p" variant="caption">
        {zipcode}
      </Text>
    </Box>
  )
}

export default PostAddress

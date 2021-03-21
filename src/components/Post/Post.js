import { Box, Card, CardContent, CardHeader, Checkbox } from '@material-ui/core'
import { green, grey } from '@material-ui/core/colors'
import React, { useState } from 'react'
import ProfilePhoto from '../../uicomponnets/ProfilePhoto/ProfilePhoto'
import Text from '../../uicomponnets/Text/Text'
import PostAddress from './PostAddress'

const Post = ({ post = {}, users = {} }) => {
  const user = users[post.userId]
  const { name, email, address } = user
  const { title, body } = post

  const [checked, setChecked] = useState(false)

  const handleChecked = () => {
    setChecked(!checked)

    // do something else. eg. call parents handler if any
  }

  const renderCardAction = () => (
    <Box display="flex">
      <PostAddress address={address} />
      <Checkbox checked={checked} name="isChecked" color="success" />
    </Box>
  )

  return (
    <Card
      component={Box}
      height="100%"
      onClick={handleChecked}
      style={{ cursor: 'pointer' }}
      bgcolor={checked ? green[200] : 'white'}
    >
      <CardHeader
        avatar={<ProfilePhoto name={name} />}
        title={name}
        subheader={email}
        action={renderCardAction()}
        component={Box}
        borderBottom={1}
        borderColor={grey[300]}
      />
      <CardContent>
        <Text variant="h5" component="h2" noWrap style={{ paddingBottom: '8px' }}>
          {title}
        </Text>
        <Text variant="body2" component="p">
          {body}
        </Text>
      </CardContent>
    </Card>
  )
}

export default Post

import { Container } from '@material-ui/core'
import React from 'react'
import PostList from '../containers/PostList/PostList'

function App() {
  return (
    <Container maxWidth="lg">
      <PostList />
    </Container>
  )
}

export default App

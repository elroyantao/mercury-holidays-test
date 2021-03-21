import { Box, Grid } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import fetchPosts from '../../api/fetchPosts'
import fetchUsers from '../../api/fetchUsers'
import Post from '../../components/Post/Post'

const PostList = () => {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState({}) // normalised users, (faster to lookup)

  useEffect(() => {
    const fetchData = async () => {
      const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()])
      setUsers(users)
      setPosts(posts)
    }

    fetchData()
  }, [])

  if (!posts.length || !users) {
    return null
  }

  return (
    <Box paddingY={4}>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} md={6}>
            <Post post={post} users={users} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PostList

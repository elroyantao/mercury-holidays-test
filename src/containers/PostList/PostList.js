import React, { useEffect, useState } from 'react'
import fetchPosts from '../../api/fetchPosts'
import fetchUsers from '../../api/fetchUsers'

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
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <div>
              {users[post.userId].name}
            </div>
            <div>
              {post.title}
            </div>
            <div>
              {post.body}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostList

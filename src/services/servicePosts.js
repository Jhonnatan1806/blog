const apiKeyPosts = process.env.API_KEY + '/posts'

export async function getAllPosts() {
  try {
    const response = await fetch(apiKeyPosts)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching posts:', error)
    return null
  }
}

export async function getPostById(id) {
  try {
    const response = await fetch(`${apiKeyPosts}/${id}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}

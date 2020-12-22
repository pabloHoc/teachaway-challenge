const getImage = async ({ queryKey }) => {
  const [, id] = queryKey

  const response = await fetch(`https://api.imgur.com/3/gallery/album/${id}`, {
    headers: {
      Authorization: 'Client-ID 6813c97c00895e9',
    },
  })
  const data = await response.json()
  return data
}

export default getImage

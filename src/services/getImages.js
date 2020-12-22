const getImages = async ({ pageParam = 0, queryKey }) => {
  const [, { section, sort, window, showViral }] = queryKey

  const response = await fetch(
    `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${pageParam}?showViral=${showViral}`,
    {
      headers: {
        Authorization: 'Client-ID 6813c97c00895e9',
      },
    }
  )
  const data = await response.json()

  return {
    data,
    pageParam: pageParam + 1,
  }
}

export default getImages

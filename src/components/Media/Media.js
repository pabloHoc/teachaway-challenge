const Media = ({ type, src, className }) => {
  return (
    <>
      {type.includes('video') && (
        <video
          className={className}
          draggable='false'
          playsInline
          autoPlay
          loop
          muted
        >
          <source type={type} src={src} />
        </video>
      )}
      {type.includes('image') && <img src={src} alt='' className={className} />}
    </>
  )
}

export default Media

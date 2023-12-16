function EachImage(props) {
  const {eachImgDetails, imageId, checkForMatchingClickedImage} = props
  const {thumbnailUrl} = eachImgDetails
  const HandleCheckForMatching = () => {
    checkForMatchingClickedImage(imageId)
  }

  return (
    <li style={{height: '100px', width: '100px', listStyleType: 'none'}}>
      <button
        type="button"
        className="eachImageButton"
        onClick={HandleCheckForMatching}
      >
        <img
          style={{height: '100%', width: '100%'}}
          src={thumbnailUrl}
          alt="each Thumbnail"
        />
      </button>
    </li>
  )
}

export default EachImage

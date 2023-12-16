import {Component} from 'react'
import EachTab from '../EachTab/index'
import EachImage from '../eachImageComponent/index'

class GameBody extends Component {
  state = {
    activeTabId: 'FRUIT',
    randomSelectedImageId: 'b11ec8ce-35c9-4d67-a7f7-07516d0d8186',
    randomIndex: 0,
  }

  selectAndChangeTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  randomIndexGeneration = () => {
    const {imagesList} = this.props
    const randomIndex = Math.floor(Math.random() * imagesList.length)
    const {id} = imagesList[randomIndex]
    console.log(id)

    this.setState({
      randomIndex,
      randomSelectedImageId: id,
    })
  }

  renderRandomlyGeneratedImage = () => {
    const {randomIndex} = this.state
    const {imagesList} = this.props
    const {thumbnailUrl} = imagesList[randomIndex]
    return (
      <img
        style={{height: '100%', width: '100%'}}
        src={thumbnailUrl}
        alt="randomlyGeneratedImage"
      />
    )
  }

  checkForMatchingClickedImage = imageId => {
    const {updateScore} = this.props
    const {randomSelectedImageId} = this.state
    if (imageId === randomSelectedImageId) {
      updateScore()
      this.randomIndexGeneration()
      console.log('Image matched')
    } else {
      console.log('Un matched')
      this.randomIndexGeneration()
    }
  }

  renderAllImagesBasedOnTabId = () => {
    const {imagesList} = this.props
    const {activeTabId} = this.state
    const filteredImagesBasedOnCategory = imagesList.filter(
      eachObj => eachObj.category === activeTabId,
    )
    return (
      <ul>
        {filteredImagesBasedOnCategory.map(eachObj => (
          <EachImage
            imageId={eachObj.id}
            key={eachObj.id}
            checkForMatchingClickedImage={this.checkForMatchingClickedImage}
            eachImgDetails={eachObj}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {tabsList} = this.props
    const {activeTabId} = this.state
    return (
      <div>
        <div style={{height: '300px', width: '300px', padding: '30px'}}>
          {this.renderRandomlyGeneratedImage()}
        </div>
        <ul>
          {tabsList.map(eachObj => (
            <EachTab
              key={eachObj.id}
              selectAndChangeTabId={this.selectAndChangeTabId}
              eachTabDetails={eachObj}
              activeTabId={eachObj.tabId}
              id={eachObj.tabId}
              isSelected={eachObj.tabId === activeTabId}
            />
          ))}
        </ul>
        <div>{this.renderAllImagesBasedOnTabId()}</div>
      </div>
    )
  }
}

export default GameBody

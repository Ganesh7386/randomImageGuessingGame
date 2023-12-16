import './index.css'

function EachTab(props) {
  const {eachTabDetails, activeTabId, isSelected} = props
  const {displayText} = eachTabDetails
  const handleChangeInActiveTabId = () => {
    const {selectAndChangeTabId} = props

    selectAndChangeTabId(activeTabId)
  }
  return (
    <li className="eachTabContainer">
      <button
        onClick={handleChangeInActiveTabId}
        className={` ${
          isSelected ? 'selectedStyling' : 'unSelectedStyling'
        } eachTabbtnStyling `}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default EachTab

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {TriggeringButton} from './styledComponents'

const ReactPopUp = () => (
  <div>
    <Popup
      modal
      trigger={<TriggeringButton type="button">Rules</TriggeringButton>}
    >
      {close => (
        <>
          <TriggeringButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </TriggeringButton>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </div>
        </>
      )}
    </Popup>
  </div>
)
export default ReactPopUp

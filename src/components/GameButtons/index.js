import {List, Button, Image} from './styledComponents'

const GameButtons = props => {
  const {buttonDetails, onSelectButton} = props
  const {id, imageUrl} = buttonDetails
  const btnClicked = () => {
    onSelectButton(id)
  }
  const idLow = id.toLowerCase()

  return (
    <List>
      <Button type="button" onClick={btnClicked} data-testid={`${idLow}Button`}>
        <Image src={imageUrl} alt={id} />
      </Button>
    </List>
  )
}
export default GameButtons

import {Component} from 'react'
import ReactPopUp from './components/Popup'
import GameButtons from './components/GameButtons'
import {
  ScorePara,
  MainContainer,
  Header,
  Heading,
  ScoreContainer,
  ButtonSelectionContainer,
  ResultImage,
  ResultImageContainer,
  ResultDisplayText,
  ResultDisplayContainer,
  PlayAgainButton,
} from './styledComponents'
import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    score: 0,
    activeId: '',
    opponentId: '',
    renderResult: false,
    displayText: '',
  }

  playAgain = () => {
    this.setState({activeId: '', opponentId: '', renderResult: false})
  }

  onSelectButton = id => {
    const randomNumber = Math.floor(Math.random(1) * 3)
    const opponentSelection = choicesList[randomNumber]
    const botId = opponentSelection.id
    this.setState(
      {activeId: id, renderResult: true, opponentId: botId},
      this.renderResultText,
    )
  }

  renderResultButton = () => {
    const {activeId, opponentId, displayText} = this.state
    const thatBtn = choicesList.filter(each => each.id === activeId)
    const selectedBtn = thatBtn[0]
    const randomBtn = choicesList.filter(each => each.id === opponentId)
    const opponentBtn = randomBtn[0]
    return (
      <ResultDisplayContainer>
        <ResultImageContainer>
          <ResultImage src={selectedBtn.imageUrl} alt="your choice" />
          <ResultImage src={opponentBtn.imageUrl} alt="opponent choice" />
        </ResultImageContainer>
        <ResultDisplayText>{displayText}</ResultDisplayText>
        <PlayAgainButton type="button" onClick={this.playAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultDisplayContainer>
    )
  }

  renderSelectionButtonContainer = () => (
    <ButtonSelectionContainer>
      {choicesList.map(each => (
        <GameButtons
          buttonDetails={each}
          onSelectButton={this.onSelectButton}
          key={each.id}
          id={each.id}
        />
      ))}
    </ButtonSelectionContainer>
  )

  renderResultText = () => {
    const {activeId, opponentId} = this.state
    const activeIdLow = activeId.toLowerCase()
    const opponentIdLow = opponentId.toLowerCase()
    if (activeIdLow === opponentIdLow) {
      this.setState({displayText: 'IT IS DRAW'})
    } else if (activeIdLow === 'paper' && opponentIdLow === 'rock') {
      this.setState(prevScore => ({
        displayText: 'YOU WON',
        score: prevScore.score + 1,
      }))
    } else if (activeIdLow === 'scissors' && opponentIdLow === 'rock') {
      this.setState(prevScore => ({
        displayText: 'YOU LOSE',
        score: prevScore.score - 1,
      }))
    } else if (activeIdLow === 'paper' && opponentIdLow === 'scissors') {
      this.setState(prevScore => ({
        displayText: 'YOU LOSE',
        score: prevScore.score - 1,
      }))
    } else if (activeIdLow === 'scissors' && opponentIdLow === 'paper') {
      this.setState(prevScore => ({
        displayText: 'YOU WON',
        score: prevScore.score + 1,
      }))
    } else if (activeIdLow === 'rock' && opponentIdLow === 'scissors') {
      this.setState(prevScore => ({
        displayText: 'YOU WON',
        score: prevScore.score + 1,
      }))
    } else if (activeIdLow === 'rock' && opponentIdLow === 'paper') {
      this.setState(prevScore => ({
        displayText: 'YOU LOSE',
        score: prevScore.score - 1,
      }))
    }
  }

  render() {
    const {score, renderResult} = this.state

    return (
      <MainContainer>
        <Header>
          <Heading>
            Rock <br /> Paper
            <br /> Scissors
          </Heading>
          <ScoreContainer>
            <p>Score</p>
            <ScorePara>{score}</ScorePara>
          </ScoreContainer>
        </Header>
        {renderResult
          ? this.renderResultButton()
          : this.renderSelectionButtonContainer()}

        <div>
          <ReactPopUp />
        </div>
      </MainContainer>
    )
  }
}

export default App

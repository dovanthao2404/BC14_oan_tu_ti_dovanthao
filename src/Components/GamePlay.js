import React, { Component } from 'react'
import { connect } from 'react-redux'
import { randomGame, handleResultGame } from "./../redux/actions"
class GamePlay extends Component {

  handlePlayGame = async () => {
    this.props.playGame()
  }
  handleNotification = () => {
    const { result } = this.props.game
    return <h1 className=" text-warning">{result === "win" ? "Ironman win hehe" : result === "lose" ? "Ironman thua rồi nhá" : "Huề rồi"}</h1>
  }

  render() {
    const { totalGamePlay, totalGameWin } = this.props.game
    return (
      <div>
        {this.handleNotification()}
        <h1 className=" text-success" > Số bàn thắng: {totalGameWin}</h1>
        <h1 className=" text-success">Tổng số bàn chơi: {totalGamePlay}</h1>
        <button className="btn btn-success" onClick={this.handlePlayGame}>Play game</button>
      </div >
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    playGame: () => {
      let count = 0;
      const random = setInterval(() => {
        dispatch(randomGame())
        if (count > 15) {
          dispatch(handleResultGame())
          clearInterval(random)
        }
        count++
      }, 100)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { randomGame, handleResultGame } from "./../redux/actions"
class GamePlay extends Component {



  handlePlayGame = () => {
    this.props.playGame()
  }

  render() {
    const { totalGamePlay, totalGameWin, result } = this.props.game
    return (
      <div>
        <h1 className=" text-warning">{result === "win" ? "Thanos là ai? Làm sao có tuổi với anh!" : result === "lose" ? "Thanos là nhất!" : "Huề nha azai"}</h1>
        <h1 className=" text-success">Số bàn thắng: {totalGameWin}</h1>
        <h1 className=" text-success">Tổng số bàn chơi: {totalGamePlay}</h1>
        <button className="btn btn-success" onClick={this.handlePlayGame}>Play game</button>
      </div>
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
          clearInterval(random)
          dispatch(handleResultGame())
        }
        count++
      }, 100)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay)
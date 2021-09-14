import React, { Component } from 'react'
import { connect } from 'react-redux'
import { randomGame, handleResultGame, handleButtonPlaying } from "./../redux/actions"
class GamePlay extends Component {

  // Xử lý khi click vào nut play game
  handlePlayGame = async () => {
    this.props.disabledButton()
    this.props.playGame()
  }

  // Thông báo trò chơi
  handleNotification = () => {
    const { result } = this.props.game
    return <h1 className=" text-warning">
      {result === "win" ? "Ironman win hehe" :
        result === "lose" ? "Ironman thua rồi nhá" :
          result === "start" ? "Bắt đầu chơi thôi nào" :
            "Huề rồi"}</h1>
  }

  render() {
    const { totalGamePlay, totalGameWin, playing } = this.props.game
    return (
      <div>
        {this.handleNotification()}
        <h1 className=" text-success" > Số bàn thắng: {totalGameWin}</h1>
        <h1 className=" text-success">Tổng số bàn chơi: {totalGamePlay}</h1>
        <button className="btn btn-success" onClick={this.handlePlayGame} disabled={!playing}>Chơi game</button>
      </div >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    game: state.game
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      const random = setInterval(() => {
        dispatch(randomGame())
        if (count > 15) {
          dispatch(handleResultGame())
          dispatch(handleButtonPlaying(true));
          clearInterval(random)
        }
        count++
      }, 100)
    },
    disabledButton: () => {
      dispatch(handleButtonPlaying(false));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePlay)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateChosen } from "./../redux/actions"
class Player extends Component {

  // xử lý update option được chọn
  handleClickImgOption = (choose) => {
    if (choose.chosen !== true) {
      this.props.updateChoose(choose.type)
    }
  }
  // Hiển thị búa, kéo bao cho người dùng chọn
  renderOption = () => {
    const dataGame = [...this.props.dataGame];
    return dataGame.map((choose, key) => {
      return <button
        className={choose.chosen ? "active" : ""}
        key={key}
        onClick={() => this.handleClickImgOption(choose)}
      >
        <img src={choose.img} alt={choose.type} />
      </button>
    })
  }

  // Hiển thị ảnh hiện tại người chơi chọn
  renderOptionCurrent = () => {
    const dataGame = [...this.props.dataGame];
    const chooseCurrent = dataGame.find((choose, key) => {
      return choose.chosen === true;
    })
    return <img src={chooseCurrent.img} alt={chooseCurrent.type} />
  }

  render() {
    return (
      <div className="player">
        <div className="chosen">
          {this.renderOptionCurrent()}
          <div className="speech-bubble"></div>
        </div>
        <img className="avatar" src="./img/player.png" alt="" />
        <div className="choose d-flex">
          {this.renderOption()}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataGame: state.game.dataGame
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateChoose: (type) => {
      dispatch(updateChosen(type))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Player)

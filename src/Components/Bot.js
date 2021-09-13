import React, { Component } from 'react'
import { connect } from 'react-redux'

class Bot extends Component {

  render() {

    return (
      <div className="player" >
        <div className="chosen">
          <img src={this.props.botChoose.img} alt="" />
          <div className="speech-bubble"></div>
        </div>
        <img className="avatar" src="./img/playerComputer.png" alt="" />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    botChoose: state.game.botChoose
  }
}
export default connect(mapStateToProps, null,)(Bot)
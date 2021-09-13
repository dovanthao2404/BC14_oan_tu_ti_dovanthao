import React, { Component } from 'react'
import Bot from './Bot'
import Player from './Player'
import GamePlay from './GamePlay'

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <div className="container">
          <div className="content row justify-content-between">
            <div className="col-md-3  text-center">
              <Player />
            </div>
            <div className="col-md-6 text-center">
              <GamePlay />
            </div>
            <div className="col-md-3  text-center">
              <Bot />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


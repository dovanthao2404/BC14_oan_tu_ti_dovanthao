import { UPDATE_CHOSEN, RANDOM_GAME, HANDLE_RESULT_GAME } from "../constants"

const updateChosen = (typeChosen) => {
  return {
    type: UPDATE_CHOSEN,
    payload: typeChosen
  }
}

const randomGame = () => {
  return {
    type: RANDOM_GAME
  }
}

const handleResultGame = () => {
  return {
    type: HANDLE_RESULT_GAME
  }
}

export { updateChosen, randomGame, handleResultGame };
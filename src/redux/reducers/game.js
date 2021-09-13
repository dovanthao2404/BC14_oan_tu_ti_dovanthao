import { HANDLE_RESULT_GAME, RANDOM_GAME, UPDATE_CHOSEN } from "../constants";

const initialState = {
  dataGame: [
    { type: "keo", img: "./img/keo.png", chosen: true },
    { type: "bua", img: "./img/bua.png", chosen: false },
    { type: "bao", img: "./img/bao.png", chosen: false }
  ],
  totalGamePlay: 0,
  totalGameWin: 0,
  botChoose: { type: "keo", img: "./img/keo.png" },
  result: "start"
}

// Hàm xử lý kết qur người dùng có win không
function isWin(playerChosen, botChosen) {
  if ((playerChosen === "bua" && botChosen === "keo")
    || (playerChosen === "bao" && botChosen === "bua")
    || (playerChosen === "keo" && botChosen === "bao")) {
    return true;
  }
  return false;
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CHOSEN:
      const temp = [...state.dataGame]

      temp.forEach((dataChilde) => {
        if (dataChilde.type === action.payload) {
          dataChilde.chosen = true
        } else {
          dataChilde.chosen = false
        }
      })

      state.dataGame = temp;
      return { ...state }

    case RANDOM_GAME:
      const random = Math.floor(Math.random() * 3);
      state.botChoose = { ...state.dataGame[random] }
      return { ...state }

    case HANDLE_RESULT_GAME:
      const index = state.dataGame.findIndex(choose => choose.chosen === true)
      const playerChosen = state.dataGame[index].type
      const botChosen = state.botChoose.type;

      if (playerChosen === botChosen) {
        state.result = ""
      } else if (playerChosen !== botChosen) {
        state.result = isWin(playerChosen, botChosen) ? "win" : "lose";
        isWin(playerChosen, botChosen) && state.totalGameWin++;
      }

      state.totalGamePlay++;

      return { ...state }
    default:
      return { ...state };
  }
}
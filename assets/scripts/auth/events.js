'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gameArray = [2, 7, 6, 9, 5, 1, 4, 3, 8]
let gridValue = []
let turns = 0
const player_x = 'X'
const player_o = 'O'

let currentPlayer = player_x
function switchPlayer (player1, player2) {
  if (currentPlayer === player1) {
    currentPlayer = player2
  } else {
    currentPlayer = player1
  }
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.changePassword(data)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

  api.signOut(data)
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onGetGames = event => {
  api.getGames()
    .then(ui.onGetGamesSuccessful)
    .catch(ui.onGetGamesFailure)
}

const onGetGame = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.getGame(formData)
    .then(ui.onGetGameSuccessful)
    .catch(ui.onGetGameSuccessful)
}

const onUpdateGame = event => {
  event.preventDefauilt()
  const form = event.target
  const formData = getFormFields(form)

  api.updateGame(formData)
    .then(ui.onUpdateGameSuccessful)
    .catch(ui.onUpdateBookFailure)
}

const onCreateGame = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createBook(formData)
    .then(ui.onCreateBookSuccessful)
    .catch(ui.onCreateGameFailure)
}

const onChooseMove = event => {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  gridValue += gameArray[Number(event.target)]
  turns++
  switchPlayer(player_x, player_o)
  api.updateGame(data)
    .then(ui.onUpdateGameSuccessful)
    .catch(ui.onUpdateGameFailure)
}



module.exports = {
  gridValue,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetGames,
  onGetGame,
  onUpdateGame,
  onCreateGame,
  onChooseMove
}

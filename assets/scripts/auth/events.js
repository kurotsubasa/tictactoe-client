'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const gridValue = []

function winOrNo () {
  let total = 0
  let end
  for (let i = 0; i < gridValue.length; i++) {
    total += gridValue[i]
  }
  if (total === 15) {
    end = true
  } else {
    end = false
  }
  return end
}

function over (endGame) {
  if (endGame === true) {
    return endGame
  } else {
    return false
  }
}

const onSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)

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

const onCreateGame = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.createGame(formData)
    .then(ui.onCreateGameSuccessful)
    .catch(ui.onCreateGameFailure)
}

const players = ['x', 'o']
let currentPlayer = players[0]

const onClick = event => {
  event.preventDefault()
  gridValue.push((Number(event.target) + 1))
  over(winOrNo)
  const ew = event.target.getAttribute('data-cell-index')
  $(event.target).text(currentPlayer)
  const data = {
    'game': {
      'cell': {
        'index': `${ew}`,
        'value': `${currentPlayer}`
      },
      'over': over(winOrNo)
    }
  }

  if (currentPlayer === players[0]) {
    currentPlayer = players[1]
  } else {
    currentPlayer = players[0]
  }
  api.updateGame(data)
    .then(ui.onUpdateGameSuccessful)
    .catch(ui.onUpdateGameFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetGames,
  onGetGame,
  onCreateGame,
  onClick
}

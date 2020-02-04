'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
let gridValue = []

let xWing = []
let oKay = []

function winOrNo (array) {
  for (let i = 0; i < array.length; i++) {
    for (let h = 0; h < array.length; h++) {
      for (let m = 0; m < array.length; m++) {
        if ((i !== h) && (h !== m) && (i !== m)) {
          if (array[i] + array[h] + array[m] === 15) {
            return true
          }
        }
      }
    }
  }
  return false
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
  currentPlayer = players[0]
  xWing = []
  oKay = []
  gridValue = []
  const form = event.target
  const formData = getFormFields(form)

  api.createGame(formData)
    .then(ui.onCreateGameSuccessful)
    .catch(ui.onCreateGameFailure)
}

const players = ['x', 'o']
let currentPlayer = players[0]
let turns = 0

const onClick = event => {
  event.preventDefault()
  const ew = event.target.getAttribute('data-cell-index')

  if ($(event.target).text() === '') {
    $(event.target).text(currentPlayer)
    gridValue.push((Number(event.target.id) + 1))
    if (currentPlayer === players[0]) {
      currentPlayer = players[1]
      xWing.push((Number(event.target.id) + 1))
    } else {
      currentPlayer = players[0]
      oKay.push((Number(event.target.id) + 1))
    }
  } else {
    $('#message').text('this spot is taken')
  }

  turns++

  function letItEnd () {
    let theEnd

    if (turns === 9) {
      theEnd = true
      ui.onTie()
    } else {
      if ((winOrNo(xWing) === true) || (winOrNo(oKay) === true)) {
        theEnd = true
      } else {
        theEnd = false
      }
      return theEnd
    }
  }

  const data = {
    'game': {
      'cell': {
        'index': `${ew}`,
        'value': `${currentPlayer}`
      },
      'over': letItEnd()
    }
  }

  store.hwat = data
  if (store.hwat.game.over === true) {
    ui.onGameOver()
  }

  api.updateGame(data)
    .then(ui.onUpdateGameSuccessful)
    .catch(ui.onUpdateGameFailure)
}

const onMouseOver = event => {
  $(event.target).css('background-color', 'red')
}

const onMouseOut = event => {
  $(event.target).css('background-color', '#0768d7')
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onGetGames,
  onGetGame,
  onCreateGame,
  onClick,
  onMouseOver,
  onMouseOut
}

'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Welcome to the beginning of your defeat ' + response.user.email + ', now please sign in :p')
  $('#sign-up').trigger('reset')
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('#sign-up').trigger('reset')
}

const onSignInSuccess = function (response) {
  $('#message').text('Welcome back ' + response.user.email + ', please click Start game to begin playing :)')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#sign-out').show()
  $('#change-password').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#intro').hide()
  $('.navbar').show()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
  $('#sign-in').trigger('reset')
}

const onChangePasswordSuccess = function (response) {
  $('#message').text('successfully changed password')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('password change failed')
  $('#change-password').trigger('reset')
}

const onSignOutSuccess = function (response) {
  $('message').text('successfully signed out')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.container').hide()
  $('#intro').show()
}

const onSignOutFailure = function (response) {
  $('#message').text('failed to sign out')
}

const onCreateGameSuccessful = function (response) {
  $('#message').text('game created')
  $('.container').show()
  $('.box').show()
  $('.help').trigger('reset')
  $('.help').text('')
  store.game = response.game
  $('#bweh').hide()
}

const onCreateGameFailure = function (response) {
  $('#message').text('failed to create game')
}

const onUpdateGameSuccessful = function (response) {
}

const onUpdateGameFailure = function (response) {
  $('#message').text('rip')
}

const onGetGamesSuccessful = function (response) {
  $('#message').text(('youve played ') + (response.games).length + ' games')
}

const onGetGamesFailure = function (response) {
  $('#message').text('cannot get games')
}

const onGameOver = function () {
  $('#bweh').show()
}

const onTie = function () {
  $('#message').text('is a tie')
}

// const player_x = 'X'
// const player_o = 'O'
// let currentPlayer = player_x
// const onUpdateGameSuccessful = function (response) {
//   let turns = 0
//   turns++
//   store.turns = turns
//   $('.id').text(currentPlayer)
//   function switchPlayer (player1, player2) {
//     if (currentPlayer === player1) {
//       currentPlayer = player2
//     } else {
//       currentPlayer = player1
//     }
//   }
//   switchPlayer(player_x, player_o)
// }
module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onCreateGameSuccessful,
  onCreateGameFailure,
  onUpdateGameSuccessful,
  onUpdateGameFailure,
  onGameOver,
  onTie,
  onGetGamesSuccessful,
  onGetGamesFailure
}

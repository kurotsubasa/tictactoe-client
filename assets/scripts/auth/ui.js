'use strict'

const store = require('./../store')

const onSignUpSuccess = function (response) {
  $('#message').text('Welcome to the beginning of your defeat ' + response.user.email)
  $('sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('.success')
}

const onSignUpFailure = function (response) {
  $('#message').text('Sign up failed')
  $('#message').removeClass()
  $('#message').addClass('.failure')
}

const onSignInSuccess = function (response) {
  $('#message').text('Welcome back ' + response.user.email)
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#sign-out').show()
  $('#change-password').show()
  $('.container').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const onSignInFailure = function (response) {
  $('#message').text('Sign in failed')
}

const onChangePasswordSuccess = function (response) {
  $('message').text('successfully changed password')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('password change failed')
}

const onSignOutSuccess = function (response) {
  $('message').text('successfully signed out')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#sign-up').show()
  $('#sign-in').show()
  $('.container').hide()
}


module.exports = {
  switchPlayer,
  currentPlayer
}

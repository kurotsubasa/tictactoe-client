'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#change-password').hide()
  $('#sign-out').hide()
  $('.container').hide()
  $('.box').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.help').on('click', authEvents.onClick)
  $('#gameStart').on('click', authEvents.onCreateGame)
  $('#gameShow').on('click', authEvents.onGetGames)
  $('#bweh').hide()
  $('.help').on('mouseover', authEvents.onMouseOver)
  $('.help').on('mouseout', authEvents.onMouseOut)
  $('.navbar').hide()
})

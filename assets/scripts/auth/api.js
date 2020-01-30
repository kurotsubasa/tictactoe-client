'use strict'

const config = require('../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const signOut = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getGames = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games'
  })
}

const getGame = (formData) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + formData.game.id
  })
}

const updateGame = (formData) => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + formData.game.id,
    data: formData
  })
}

const getGameWatch = (formData) => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + formData.game.id + 'watch'
  })
}

module.expoerts = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getGames,
  getGame,
  updateGame,
  getGameWatch
}

const fs = require('fs')
const path = require('path')

const mockBaseURL = 'https://note-server.hunger-valley.com'
const realBaseURL = 'https://note-server.hunger-valley.com'

exports.config = function({ isdev = true } = {isdev: true}) {
  let fileTxt=`
   module.exports = {
    baseURL: '${isdev ? mockBaseURL : realBaseURL}'
   }
  `
  fs.writeFileSync(path.join(__dirname, '../src/helpers/config-baseURL.js'), fileTxt)
}
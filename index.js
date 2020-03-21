// https://www.twitch.tv/popout/chap/chat?popout=

document.addEventListener('DOMContentLoaded', function () {
  let username = localStorage.getItem('username')
  if (username !== null) document.getElementById('username').value = username
})

let chatWindowUid = null
let button = document.querySelector('.purple-button')

function openChat() {
  let username = document.getElementById('username').value
  if (!username.length) return
  // window.open(`https://www.twitch.tv/popout/${username}/chat?popout=`, '_blank')
  localStorage.setItem('username', username)
  ovrt.createWebWin(`https://www.twitch.tv/popout/${username}/chat?popout=`, 400, 500)
}

ovrt.onWinOpened = function (uid) {
  console.log('Captured window open', uid)
  chatWindowUid = uid
  button.setAttribute('disabled', true)
}

ovrt.onWinClosed = function (uid) {
  if (uid !== chatWindowUid) return
  chatWindowUid = -1
  document.getElementById('')
  button.setAttribute('disabled', false)
}

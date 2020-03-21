// https://www.twitch.tv/popout/chap/chat?popout=

document.addEventListener('DOMContentLoaded', function () {
  let username = localStorage.getItem('username')
  if (username !== null) document.getElementById('username').value = username
})

function openChat() {
  let username = document.getElementById('username').value
  if (!username.length) return
  console.log('Open chat', username)
  // window.open(`https://www.twitch.tv/popout/${username}/chat?popout=`, '_blank')
  localStorage.setItem('username', username)
  ovrt.createWebWin(`https://www.twitch.tv/popout/${username}/chat?popout=`)
}
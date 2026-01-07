/* eslint-disable no-unused-vars */
function toSentenceCase(txt) {
  let res = ''
  
  txt = txt.toLowerCase().replace(/_/g, ' ')

  for (let word of txt.split(' ')) {
    res += word.charAt(0).toUpperCase() + word.slice(1) + ' '
  }

  return res.trim()
}

function darkenColor(hexColor) {
  let newColor = Number('0x' + hexColor.replace(/#/, '')) - 1118481

  return '#' + newColor.toString(16)
}
function editString(str) {
  let a = str.substring(0, 10)
  let b = new Date(a.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3'))
  let c = Date.parse(new Date(b)) - Date.parse(new Date())
  let d = Math.round(c / (1000 * 60 * 60 * 24) )
  return d
}


// endDate.substring(0, 10)
// new Date(endDate.replace(/(\d{2})-(\d{2})-(\d{4})/, '$2/$1/$3'))
// Date.parse(new Date(timeLimitdev)) - Date.parse(new Date())
// Math.floor(timeLimitdev2 / (1000 * 60 * 60 * 24) + 1)

console.log(editString("2022-12-10T10:02:00.000Z"))
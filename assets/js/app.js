// Global Values for my script tag
var userScore = 0
var cpuScore = 0
var cpuPick = ['Fire', 'Water', 'Grass']
var userWins = 0
var cpuWins = 0
// Hides final results information
document.getElementById('toggle-results').style.display = 'none'
// Displays all score related things
document.getElementById('userWins').innerHTML = userWins
document.getElementById('userScore').innerHTML = userScore
document.getElementById('cpuScore').innerHTML = cpuScore
document.getElementById('cpuWins').innerHTML = cpuWins

document.getElementById('fire').addEventListener('click', function () {
  // This displays our clicked value
  document.getElementById('userResult').innerHTML = 'Fire'
  document.getElementById('userResult').style.color = '#FC3319'
  // This randomly grabs one of the array values
  var cpuChoice = cpuPick[Math.floor(Math.random() * cpuPick.length)]
  // This grabs our value from our HTML to increment the players score
  document.getElementById('userScore').innerText = userScore
  // This grabs our value from our HTML to increment the cpu score
  document.getElementById('cpuScore').innerHTML = cpuScore

  // This displays our random value from our cpuPick array
  document.getElementById('cpuResult').innerHTML = cpuChoice
  // These if statements will add a point depending on the out come of the computers result
  if (cpuChoice === 'Grass') {
    document.getElementById('results-message').innerText = `You chose Fire, the computer chose ${cpuChoice}, you Win!`
    userScore++
    check()
  }
  if (cpuChoice === 'Fire') {
    document.getElementById('results-message').innerText = `You chose Fire, the computer chose ${cpuChoice}, draw!`
  }
  if (cpuChoice === 'Water') {
    document.getElementById('results-message').innerText = `You chose Fire, the computer chose ${cpuChoice}, you Lose!`
    cpuScore++
    check()
  }
})

document.getElementById('water').addEventListener('click', function () {
  // This displays our clicked value
  document.getElementById('userResult').innerHTML = 'Water'
  document.getElementById('userResult').style.color = '#252EF4'
  // This randomly grabs one of the array values
  var cpuChoice = cpuPick[Math.floor(Math.random() * cpuPick.length)]
  // This grabs our value from our HTML to increment the players score
  document.getElementById('userScore').innerText = userScore
  // This grabs our value from our HTML to increment the cpu score
  document.getElementById('cpuScore').innerHTML = cpuScore

  // This displays our random value from our cpuPick array
  document.getElementById('cpuResult').innerHTML = cpuChoice
  // These if statements will add a point depending on the out come of the computers result
  if (cpuChoice === 'Grass') {
    document.getElementById('results-message').innerText = `You chose Water, the computer chose ${cpuChoice}, you Lose!`
    cpuScore++
    check()
  }
  if (cpuChoice === 'Fire') {
    document.getElementById('results-message').innerText = `You chose Water, the computer chose ${cpuChoice}, you Win!`
    userScore++
    check()
  }
  if (cpuChoice === 'Water') {
    document.getElementById('results-message').innerText = `You chose Water, the computer chose ${cpuChoice}, Draw!`
  }
})

document.getElementById('grass').addEventListener('click', function () {
  // This displays our clicked value
  document.getElementById('userResult').innerHTML = 'Grass'
  document.getElementById('userResult').style.color = '#188336'
  // This randomly grabs one of the array values
  var cpuChoice = cpuPick[Math.floor(Math.random() * cpuPick.length)]
  // This grabs our value from our HTML to increment the players score
  document.getElementById('userScore').innerText = userScore
  // This grabs our value from our HTML to increment the cpu score
  document.getElementById('cpuScore').innerHTML = cpuScore

  // This displays our random value from our cpuPick array
  document.getElementById('cpuResult').innerHTML = cpuChoice
  // These if statements will add a point depending on the out come of the computers result
  if (cpuChoice === 'Grass') {
    document.getElementById('results-message').innerText = `You chose Grass, the computer chose ${cpuChoice}, Draw!`
    check()
  }
  if (cpuChoice === 'Fire') {
    document.getElementById('results-message').innerText = `You chose Grass, the computer chose ${cpuChoice}, you Lose!`
    cpuScore++
    check()
  }
  if (cpuChoice === 'Water') {
    document.getElementById('results-message').innerText = `You chose Grass, the computer chose ${cpuChoice}, you Win!`
    userScore++
    check()
  }
})
function check () {
  if (userScore >= 5) {
    // Hides Game info
    document.getElementById('toggle-game').style.display = 'none'
    // Reveals results info
    document.getElementById('toggle-results').style.display = 'block'

    document.getElementById('final').innerText = `Congratulations! You have declared victory on your enemy!`

    document.getElementById('userWins').innerText = userWins
    userWins++

    document.getElementById('play-again').addEventListener('click', function () {
      reset()
    })
  }

  if (cpuScore >= 5) {
    // Hides Game info
    document.getElementById('toggle-game').style.display = 'none'
    // Reveals results info
    document.getElementById('toggle-results').style.display = 'block'

    document.getElementById('final').innerText = `You have been defeated by your enemy...`
    // These are for the incremented
    document.getElementById('cpuWins').innerText = cpuWins
    cpuWins++

    document.getElementById('play-again').addEventListener('click', function () {
      reset()
    })
  }
}

function reset () {
  document.getElementById('results-message').innerText = ''
  document.getElementById('userResult').innerText = ''
  document.getElementById('cpuResult').innerText = ''
  userScore = 0
  cpuScore = 0

  document.getElementById('toggle-game').style.display = 'block'
  document.getElementById('toggle-results').style.display = 'none'
}

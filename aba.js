// array for game result probability
// 'd' = draw, 'p' = player 1 win, 'c' = com win
const WIN_TABLE = [
    ['d', 'p', 'c'],
    ['c', 'd', 'p'],
    ['p', 'c', 'd']
  ]
  
  // disable player 1 input after player 1 selected an option
  const disableInput = () => {
    document.querySelectorAll('.choice-player').forEach(input => {
      input.setAttribute('disabled', 'disabled')
    })
  }
  
  // hide versus info when result is visible
  const hideVersus = () => document.getElementById('vs').style.display = 'none'
  
  // show game result. 
  const showResult = result => {
  // Object contains result as key, and [log info, css class to manipulate] as value
    const resultInfo = {
      'c': ['Com win', 'win-com'],
      'p': ['Player 1 win', 'win-player'],
      'd': ['Draw', 'draw']
      
    }
  
    console.log(resultInfo)
    hideVersus()
    document.getElementById(resultInfo[result][1]).style.display = 'block'
    disableInput()
  }
  
  // get player 1 choice and compare it to com choice. Then show game result function
  const getChoice = choice => {
    const PLAYER_CHOICE = ['rock', 'paper', 'scissors']
    const COM_CHOICE = ['com-rock', 'com-paper', 'com-scissors']
  
    const random = Math.floor(Math.random() * 3) // random com choice
  
    document.getElementById(PLAYER_CHOICE[choice]).classList.add('chosen')
    document.getElementById(COM_CHOICE[random]).classList.add('chosen')
   
    const gameResult = WIN_TABLE[random][choice] // get the result by accessing the result probability in WIN_TABLE
    showResult(gameResult) // invoke showResult to show the result in browser
  }
  
  // implement refresh game to restart the game
  const refreshGame = () => {
  
    document.querySelectorAll('.choice-player').forEach(input => {
      input.removeAttribute('disabled')
    })
  
    document.getElementById('vs').style.display = 'block'
    document.getElementById('draw').style.display = 'none';
    document.getElementById('win-player').style.display = 'none';
    document.getElementById('win-com').style.display = 'none';
  
    document.querySelectorAll('.choice-player').forEach(choice => {
      choice.classList.add('choice-hover');
      choice.style.cursor = 'pointer';
    })
  
    document.querySelectorAll('.figure').forEach(figure => {
      figure.classList.remove('chosen');
    })
  }
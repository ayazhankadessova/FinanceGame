function calculate() {
  var drinkExpense = document.getElementById('drinks').value
  var diningExpense = document.getElementById('eatOut').value
  var socialExpense = document.getElementById('friends').value
  var filmExpense = document.getElementById('film').value
  var shoppingExpense = document.getElementById('shopping').value

  var newExpenses =
    parseInt(shoppingExpense) +
    parseInt(drinkExpense) * 4 * 60 +
    parseInt(diningExpense) * 4 +
    parseInt(socialExpense) * 4 +
    parseInt(filmExpense) * 100

  // diningExpense * 4 +
  // socialExpense * 4

  var oldExpenses = 2190

  var newLeftOver = 2400 - newExpenses

  var monthlyImprovement = oldExpenses - newExpenses

  if (monthlyImprovement > 0 && newLeftOver >= 640) {
    document.getElementById(
      'summary'
    ).innerHTML = `Congratulations! You helped Kate figure out her budget. She now has a monthly leftover of $${newLeftOver}! That's $${monthlyImprovement} more savings per month!
		She's now on track to buy her guitar before Disney Ticket!`
  } else {
    document.getElementById(
      'summary'
    ).innerHTML = `Oh no! of $${newLeftOver}! Seems like you need to helped Kate figure out her budget again. She's not on track to buy her Disney Ticket!
		Evaluate her expenses and find out where she can save!`
  }
}
function checkNeedsVsWants() {
  var score = 0
  if (document.getElementById('starbucks-want').checked) {
    document.getElementById('starbucks-score').innerHTML = 'Correct'
    score++
  } else {
    document.getElementById('starbucks-score').innerHTML = 'Incorrect'
  }
  if (document.getElementById('phone-need').checked) {
    document.getElementById('phone-score').innerHTML = 'Correct'
    score++
  } else {
    document.getElementById('phone-score').innerHTML = 'Incorrect'
  }
  if (document.getElementById('car-want').checked) {
    document.getElementById('car-score').innerHTML = 'Correct'
    score++
  } else {
    document.getElementById('car-score').innerHTML = 'Incorrect'
  }
  if (document.getElementById('bus-need').checked) {
    document.getElementById('bus-score').innerHTML = 'Correct'
    score++
  } else {
    document.getElementById('bus-score').innerHTML = 'Incorrect'
  }
  if (document.getElementById('paint-want').checked) {
    document.getElementById('paint-score').innerHTML = 'Correct'
    score++
  } else {
    document.getElementById('paint-score').innerHTML = 'Incorrect'
  }
  if (document.getElementById('restaurants-want').checked) {
    document.getElementById('restaurants-score').innerHTML = 'Correct'
    score++
  } else {
    document.getElementById('restaurants-score').innerHTML = 'Incorrect'
  }
  document.getElementById('total-score').innerHTML = 'Score: ' + score + '/6'
  return score
}

function checkIncomeExpense() {
  var score = 0
  //option 1
  var vpartTimeDropdown = document.getElementById('partTimeDropdown').value
  var vpartTimesContainer = document.getElementById('partTimesContainer')
  if (vpartTimeDropdown == 'Expenses') {
    vpartTimesContainer.innerHTML = "<span class='color-red'>Wrong!</span>"
  } else {
    vpartTimesContainer.innerHTML = "<span class='color-green'>Correct!</span>"
    score++
  }

  //option 2
  var vcashPrizeDropdown = document.getElementById('cashPrizeDropdown').value
  var cashPrizeContainer = document.getElementById('cashPrizeContainer')
  if (vcashPrizeDropdown == 'Expenses') {
    cashPrizeContainer.innerHTML = "<span class='color-red'>Wrong!</span>"
  } else {
    cashPrizeContainer.innerHTML = "<span class='color-green'>Correct!</span>"
    score++
  }

  //option 3
  var vFoodDropdown = document.getElementById('foodDropdown').value
  var foodContainer = document.getElementById('foodContainer')
  if (vFoodDropdown == 'Expenses') {
    foodContainer.innerHTML = "<span class='color-green'>Correct!</span>"
    score++
  } else {
    foodContainer.innerHTML = "<span class='color-red'>Wrong!</span>"
  }

  //option 4
  var vskinCareDropdown = document.getElementById('skinCareDropdown').value
  var skinCareContainer = document.getElementById('skinCareContainer')
  if (vskinCareDropdown == 'Expenses') {
    skinCareContainer.innerHTML = "<span class='color-green'>Correct!</span>"
    score++
  } else {
    skinCareContainer.innerHTML = "<span class='color-red'>Wrong!</span>"
  }

  //option 5
  var vMovieDropdown = document.getElementById('MovieDropdown').value
  var MovieContainer = document.getElementById('MovieContainer')
  if (vMovieDropdown == 'Expenses') {
    MovieContainer.innerHTML = "<span class='color-green'>Correct!</span>"
    score++
  } else {
    MovieContainer.innerHTML = "<span class='color-red'>Wrong!</span>"
  }
  //option 6
  var v = document.getElementById('giftDropdown').value
  var giftCT = document.getElementById('giftContainer')
  if (v == 'Expenses') {
    giftCT.innerHTML = "<span class='color-green'>Correct!</span>"
    score++
  } else {
    giftCT.innerHTML = "<span class='color-red'>Wrong!</span>"
  }

  if (score == 6) {
    document.getElementById('total-score').innerHTML =
      'Score: ' + score + '/6. You aced it!'
  } else if (score > 4 && score < 6) {
    document.getElementById('total-score').innerHTML =
      'Score: ' + score + '/6. Not bad, but revison may help!'
  } else {
    document.getElementById('total-score').innerHTML =
      'Score: ' + score + '/6. Try one more time.'
  }
  return score
}

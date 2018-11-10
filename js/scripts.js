const isPrime = function(value) {
  for (var i = 2; i < value; i++) {
    if (value % i === 0) {
      return false
    }
  }
  return value !== 1 && value !== 0
}

const checkPrime = function(value) {
  var value = document.getElementById("number").value
  if (validate(value)) {
    if (isPrime(value)) {
      document.getElementById("result").innerHTML = "Congrats"
      setTimeout(function() {
        window.location = "http://xite.com/live"
      }, 5000)
    } else {
      document.getElementById("result").innerHTML = "You got it wrong"
    }
  } else {
    document.getElementById("result").innerHTML = "You got it wrong"
  }
}

const validate = function(value) {
  if (value <= 1 || isNaN(value)) {
    return false
  }
  return true
}

module.exports = {
  isPrime,
  checkPrime,
  validate
}

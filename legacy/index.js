function mod(value) {
  return Math.floor((value - 10) / 2)
}

function roll(dice) {
  return Math.floor(dice * Math.random()) + 1
}

// calc expression like 5d10+4
function calc(exp) {
  const regexp = /(\d*)d(\d*)(\+|\-)*(\d*)/
  let [input, amount, dice, sign, mod] = exp.match(regexp)
  mod = parseInt(mod)
  dice = dice == '' ? 6 : parseInt(dice)
  amount = amount == '' ? 1 : parseInt(amount)
  // console.table(amount, dice, sign, mod);
  let sum = 0
  for (let i = 0; i < amount; i++) {
    sum += roll(dice)
  }
  if (sign) sign == '+' ? (sum += mod) : (sum -= mod)

  return sum
}

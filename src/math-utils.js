export const SECONDS_IN_AN_MINUTE = 60;
export const SECONDS_IN_AN_HOUR = SECONDS_IN_AN_MINUTE * 60;

/** @function weightedRandom
 *  A random number between 0 and 1 weighted towards the middle.
 *  @param bellFactor Increasing this number increases the weight towards the middle.
 */
export function weightedRandom(bellFactor) {
  var max = 100;
  var num = 0;
  for (var i = 0; i < bellFactor; i++) {
    num += Math.random() * (max/bellFactor);
  }
  return num / max;
}

export function roundToNearest(x, interval) {
  return Math.ceil(x / interval) * interval;
}

/**
 * @function dropOff
 * @param x must be greater than 0. Values of x over 1 will likely return 0.
 * @paran s must be between 1 and 25
 * @returns A value between 0 and 2. When x = 0 the return value is 1.
            As x approaches 1 the return value appraoches 0. The higher s is
            the longer the return value will remain close to 1 but the quicker the
            drop off is near to x = 1.
 * Desmos.com
 * y=-x^{\left(4S\right)}+1.25
 */
export function dropOff(x, s = 1) {
  const y = Math.pow(-x, 4*s) + 1.25;
  return Math.min(Math.max(y, 0), 2);
}

/**
 * @function dropOffWithBoost
 * @param x must be greater than 0. Values of x over 1 will likely return 0.
 * @paran s must be between 1 and 25
 * @returns A value between 0 and 2. When x = 0.5 the return value will always be 0.5.
 *          as x approaches 0 the return value approaches 2, as x approaches 1 the
 *          return value approaches 0. The higher mod the more the return value stays
 *          near to 1 at and the steeper the slopes at x = 0 and x = 1.
 * Desmos.com
 * y=\left(-\left(2x-1\right)^{\left(2S+1\right)}+1\right)
 */
export function dropOffWithBoost(x, s = 1) {
  const y = Math.pow(-(2*x-1), 2*s+1) + 1;
  return Math.min(Math.max(y, 0), 2);
}

// Each argument should either be a number or an object with a "value" and an optional "weight"
export function weightedAverage() {
  let value = 0;
  let weights = 0;
  for (var i = 0; i < arguments.length; i++) {
    let param = arguments[i];
    if (typeof param === 'object') {
      let weight = typeof param.weight !== 'undefined' ? param.weight : 1;
      value += param.value * weight;
      weights += weight;
    } else {
      value += param;
      weights += 1;
    }
  }

  return value / weights;
}

/** @function randomMinutesBetween
 *  Returns a random amount of time given in seconds betwee x minutes and y minutes.
 */
export function randomMinutesBetween(x, y) {
  return SECONDS_IN_AN_MINUTE * getRandomInt(x, y);
}

/** @function weightedRandomTowards
 *  @returns A random number between x and y weight towards z with a weight as given.
 */
export function weightedRandomTowards(x, y, z, weight) {
  return (getRandomInt(x, y) + (z * weight)) / (weight + 1);
}

export function randomBellMod(weight = 2) {
  return weightedRandomTowards(0, 1, 0.5, weight);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function nearest100(x) {
  return Math.floor(x/100)*100
}

export function msSinceMidnight(date) {
  let previousMidnight = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0,0,0);
  return date.getTime() - previousMidnight.getTime();
}

export function prettyDateTime(date) {
    var strArray=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var d = date.getDate();
    var m = strArray[date.getMonth()];
    var y = date.getFullYear();
    var suf;
    if (d === 1) {
      suf = "st";
    } else if (d === 2) {
      suf = "nd";
    } else if (d === 3) {
      suf = "rd";
    } else {
      suf = "th"
    }

    var hour;
    var hourSuf;
    if (date.getHours() >= 13) {
      hour = date.getHours() - 12;
      hourSuf = 'pm';
    } else if (date.getHours() === 12) {
      hour = date.getHours();
      hourSuf = 'pm';
    } else {
      hour = date.getHours();
      hourSuf = 'am';
    }
    var minutes = date.getMinutes() > 9 ? "" + date.getMinutes(): "0" + date.getMinutes();
    return `${hour}:${minutes} ${hourSuf} on ${m} ${d}${suf}, ${y}`;
}

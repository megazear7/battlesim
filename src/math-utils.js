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

/** @function randomMinutesBetween
 *  Returns a random amount of time given in seconds betwee x minutes and y minutes.
 */
export function randomMinutesBetween(x, y) {
  return SECONDS_IN_AN_MINUTE * getRandomInt(x, y);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
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

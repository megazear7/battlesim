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

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function nearest100(x) {
  return Math.floor(x/100)*100
}

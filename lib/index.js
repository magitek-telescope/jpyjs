exports.jpy = function (n) {
  if (isNaN(n + '')) {
    throw new Error('parameter is NaN');
  }
  return (n+'').replace(/(\d)(?=(\d\d\d)+$)/g , "$1,");
}

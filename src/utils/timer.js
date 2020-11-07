function timeToDecimal(input) {
  var parts = input.split(":"),
    minutes = +parts[0],
    seconds = +parts[1];
  return minutes * 60 + seconds;
}

export function getCurrentTime(mv) {
  const dateNow = new Date();
  const video = timeToDecimal(mv);
  const now = timeToDecimal(`${dateNow.getMinutes()}:${dateNow.getSeconds()}`);
  //const now = timeToDecimal(`20:00`)
  const result = cal(now, video);
  return result;
  //console.log( now );
  //console.log( result );
}

function cal(now, mfcal) {
  const multiplyby = Math.trunc(now / mfcal);
  const subtractby = multiplyby * mfcal;
  const result = now - subtractby;
  //const subtractby2 = now-subtractby
  //const result =mfcal-subtractby2
  return result;
}

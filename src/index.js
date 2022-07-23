module.exports = function check(str, bracketsConfig) {
    let tpl = bracketsConfig.map(el => el.join(''));

  let l = 0;
  do {
      l = str.length;
      tpl.map((el) => { str = str.replace(el, '') })

  } while ((str.length < l) && (str.length > 0))

  if (str.length > 0) {
      return false;
  }
  return true;
}

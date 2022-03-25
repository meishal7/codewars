function validParentheses(parens) {
  let arr = [];
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] == "(") arr.push(parens[i]);
    else {
      if (arr.length == 0) return false;
      else {
        if (arr[0] == "(") {
          arr.shift();
        }
      }
    }
  }
  if (arr.length == 0) return true;
  else return false;
}

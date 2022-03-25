function pyramid(n) {
  let arr = [];
  if (n == 0) {
    return arr;
  }
  let counter = 1;
  while (counter < n + 1) {
    let subarray = [];
    for (let i = 0; i < counter; i++) {
      subarray.push(1);
    }

    arr.push(subarray);
    counter++;
  }

  console.log(arr);
  return arr;
}

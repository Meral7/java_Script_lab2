function maxString(str) {
  let arr = str.split(" ");
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  document.write(max);
}
let str = prompt("Enter String: ");
maxString(str);
function sortArray() {
    let arr = [];
    let number = 0;
    for (let i = 0; i < 5; i++) {
      number = parseInt(prompt(`Enter element number ${i + 1}: `));
      arr.push(number);
    }
    arr.sort((a, b) => a - b);
    document.write(arr);
    arr.reverse();
    document.write(`<br>`);
    document.write(arr);
  }
  sortArray();
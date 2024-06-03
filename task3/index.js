function sortArray() {
    let arr = [];
    let number = 0;
    document.write("ur values  is ")
    for (let i = 0; i < 5; i++) {
      number = parseInt(prompt(`Enter element number ${i + 1}: `));
     
      document.write(number)
      arr.push(number);
    }
    arr.sort((a, b) => a - b);
    document.write(`<br>`);
    document.write("ur values  after being sorted descending ")
    document.write(arr);
    arr.reverse();
    document.write(`<br>`);
    document.write("ur values  after being sorted ascending ")
    document.write(arr);
  }
  sortArray();
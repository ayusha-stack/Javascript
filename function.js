function transform(collection, tranFunc) {
    const newArr = [];
    for (let i = 0; i < collection.length; i++) {
      newArr.push(tranFunc(collection[i]));
    }
    return newArr;
  }

const numbers = [1, 2, 3, 4];

const output = transform(numbers, function(num) {
  return num * 2;
});

console.log(output); 
  
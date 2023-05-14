function sortBy(array, key) {

    const sortedArray =  [{
        id: 1,
        name: 'John',
    }, {
        id: 2,
        name: 'Mary',
    }, {
        id: 3,
        name: 'Andrew',
    }];

  
    sortedArray.sort(function(a, b) {
      const keyA = a[key];
      const keyB = b[key];
      if (keyA < keyB) {
        return -1;
      }
      if (keyA > keyB) {
        return 1;
      }
      return 0;
    });
  
    return sortedArray;
  }
  const arr = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Mary' },
    { id: 3, name: 'Andrew' }
  ];
  
  const sorted = sortBy(arr, 'name');
  console.log(sorted);
  
function searchByName(arr, name) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name.toLowerCase() === name.toLowerCase()) {
        return arr[i];
      }
    }
    return null;
  }
  
  function searchByKey(arr, key, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key].toLowerCase() === value.toLowerCase()) {
        return arr[i];
      }
    }
    return null;
  }

  const fruits = [
    { id: 1, name: 'Banana', color: 'Yellow' },
    { id: 2, name: 'Apple', color: 'Red' }
  ];
  
  const resultByName = searchByName(fruits, 'apple');
  console.log(resultByName); 
  const resultByKey = searchByKey(fruits, 'name', 'apple');
  console.log(resultByKey); // { id: 2, name: 'Apple', color: 'Red
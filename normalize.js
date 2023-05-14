function normalize(input) {
    const output = {};
    
    function normalizeHelper(item) {
      const normalizedItem = {
        id: item.id,
        name: item.name,
      };
      
      if (item.children) {
        normalizedItem.children = item.children.map(child => child.id);
        item.children.forEach(child => normalizeHelper(child));
      }
      
      output[item.id] = normalizedItem;
    }
    
    Object.values(input).forEach(item => normalizeHelper(item));
    
    return output;
  }const input = {
    '1': {
      id: 1,
      name: 'John',
      children: [
        { id: 2, name: 'Sally' },
        { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
      ]
    },
    '5': {
      id: 5,
      name: 'Mike',
      children: [{ id: 6, name: 'Peter' }]
    }
  };
  const output = normalize(input);
  console.log(output);


  
const sumOfProperty = (data, property) => {
  return data.reduce((acc, obj) => {
    return acc + obj[property];
}, 0);
};

export default sumOfProperty;

// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(arguments.length === 0) return [];

  const sortArray = [];

  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 !== 0) {
      sortArray.push(matrix[i].reverse());
    } else {
      sortArray.push(matrix[i]);
    }
  }

  return sortArray.flat();
}

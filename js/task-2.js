function makeArray(firstArray, secondArray, maxLength) {
  const newArr = [...firstArray, ...secondArray];
  return newArr.length > maxLength ? newArr.slice(0, maxLength) : newArr;
}



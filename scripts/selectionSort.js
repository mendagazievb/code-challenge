/**
 * Поиск наименьшего значения
 *
 * @param {Array} arr массив
 * @return {number} позиция в массиве
 */
const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
};

/**
 * Сортировка выбором O(n ^ 2)
 *
 * @param {Array} arr массив
 * @return {Array}
 */
const selectionSort = (arr) => {
  let sortArr = [];

  while (arr.length--) {
    let smallest = findSmallest(arr);
    sortArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }

  return sortArr;
};

export default selectionSort;
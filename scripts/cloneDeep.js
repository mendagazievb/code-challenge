/**
 * Проверка полученного значения на объект,
 * если тип равен объекту, то выполняем рекурсию
 * @param {*} val - значение
 * @returns {*}
 */
const getValue = (val) => {
  return typeof val === 'object' ? cloneDeep(val) : val;
};

/**
 * Выполнение копирования объекта
 * @param {*} obj
 * @return {*}
 */
const cloneDeep = function (obj) {
  if (!obj) return obj;

  let cloneObject = null;
  // Получаем тип параметра obj
  const typeObject = Object.prototype.toString.call(obj).slice(8, -1);

  if (typeObject === 'Date') {
    cloneObject = new Date(obj);
  }

  if (typeObject === 'Object') {
    cloneObject = {};

    for (let [key, val] of Object.entries(obj)) {
      cloneObject[key] = getValue(val);
    }
  }

  if (typeObject === 'Array') {
    cloneObject = [];

    obj.forEach((item) => {
      cloneObject.push(getValue(item));
    });
  }

  return cloneObject;
};

export default cloneDeep;
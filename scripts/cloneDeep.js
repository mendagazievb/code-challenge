/**
 * Создает глубокую копию объекта
 * @param obj {Object|Array}
 * @return {Object|Array}
 */
const cloneDeep = function (obj) {
  // Получаем тип параметра obj
  const typeObject = Object.prototype.toString.call(obj).slice(8, -1);
  let cloneObject = null;

  if (typeObject === 'Object') {
    cloneObject = {};

    for (let [key, val] of Object.entries(obj)) {
      // Если тип значения равен объекту, то вызываем функию снова
      cloneObject[key] = typeof val === 'object' ? cloneDeep(val) : val;
    }

  } else if (typeObject === 'Array') {
    // Получаем копию массива
    cloneObject = [];

    obj.forEach((item) => {
      if (typeof item === 'object') {
        cloneObject.push(cloneDeep(item))
      } else {
        cloneObject.push(item);
      }
    });
  }

  return cloneObject;
};

// Проверка cloneDeep
let obj = {
  a: 1,
  getContext() {
    console.log(this)
  },
  next: {
    a: 2,
    b: [{name: 'john', link: {url: 'link', image: 'src'}}, {name: 'doe',link: {url: 'link', image: 'src'}}],
    next: {
      a: {array: [1, 2, 3]}
    }
  }
};


let clone = cloneDeep(obj);
obj.next.b[0].name = 'change';
obj.next.b[1].link.image = 'change';

// Проверяем на изменение

assert(clone.next.b[0].name, 'john');
assert(clone.next.b[1].link.image, 'src');
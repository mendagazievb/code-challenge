import cloneDeep from './cloneDeep';
import curry from './curry';


/**
 * Сравнение двух переданных аргументов
 * @param a - первый параметр
 * @param b - второй параметр
 */
const assert = (a, b) => {
  if (a !== b) {
    throw new Error(`value ${a} is not equal to the ${b}`);
  }
};


// Проверяем cloneDeep

// Шаблон объекта
let obj = {
  a: 1,
  date: new Date(2018, 3, 21),
  null: null,
  undefined: undefined,
  method: function() {
    return this.a;
  },
  next: {
    num: 2,
    data: [
      {
        name: 'john',
        link: { url: 'link', image: 'src' }
      },
      {
        name: 'doe',
        link: { url: 'link', image: 'src' }
      }
    ],
    next: {
      a: { list: [1, 2, 3] }
    }
  }
};

const t0 = performance.now();

// Копируем объект
let clone = cloneDeep(obj);

const t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.");


// Изменяем значения
obj.a = 4;
obj.next.data[0].name = 'changeName';
obj.next.data[1].link.image = 'changeImg';

// Проверям скопированный объект
assert(clone.next.data[0].name, 'john');
assert(clone.next.data[1].link.image, 'src');


/**
 * Проверка curry.js
 */
const abc = function (a, b, c) {
  return a + b + c;
};

const abcdef = function (a, b, c, d, e, f) {
  return a + b + c + d + e + f;
};

// debugger

// Проверка функции curry
assert(curry(abc)('A')('B')('C'), 'ABC');
assert(curry(abc)('A', 'B')('C'), 'ABC');
assert(curry(abc)('A', 'B', 'C'), 'ABC');

assert(curry('A')('B')('C')('D')('E')('F')(abcdef), 'ABCDEF');
assert(curry('A', 'B', 'C')('D', 'E', 'F')(abcdef), 'ABCDEF');


// Проверка метода curry
assert(abc.curry('A')('B')('C'), 'ABC');
assert(abc.curry('A', 'B')('C'), 'ABC');
assert(abc.curry('A', 'B', 'C'), 'ABC');

assert(abcdef.curry('A')('B')('C')('D')('E')('F'), 'ABCDEF');
assert(abcdef.curry('A', 'B', 'C')('D', 'E', 'F'), 'ABCDEF');